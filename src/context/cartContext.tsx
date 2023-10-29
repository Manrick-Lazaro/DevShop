import { createContext, ReactNode, useState } from "react";
import type { iProducts } from "../pages/home";

interface CartContextProps {
	cart: cartProps[];
	cartAmount: number;
	total: string;
	addItemCart: (newItem: iProducts) => void;
	removeItemCart: (product: cartProps) => void;
}

export interface cartProps {
	id: number;
	title: string;
	description: string;
	price: number;
	cover: string;
	amount: number;
	total: number;
}

interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<cartProps[]>([]);
	const [total, setTotal] = useState<string>("");

	function addItemCart(newItem: iProducts) {
		const indexItem = cart.findIndex((item) => item.id === newItem.id);

		if (indexItem !== -1) {
			const cartList = cart;

			cartList[indexItem].amount = cartList[indexItem].amount += 1;
			cartList[indexItem].total =
				cartList[indexItem].price * cartList[indexItem].amount;

			setCart(cartList);
			totalResultCart(cartList);
			return;
		}

		const data = {
			...newItem,
			amount: 1,
			total: newItem.price,
		};

		setCart((products) => [...products, data]);
		totalResultCart([...cart, data]);
	}

	function removeItemCart(product: cartProps) {
		const indexItem = cart.findIndex((item) => item.id === product.id);

		if (cart[indexItem]?.amount > 1) {
			const cartList = cart;

			cartList[indexItem].amount = cartList[indexItem].amount -= 1;
			cartList[indexItem].total =
				cartList[indexItem].price * cartList[indexItem].amount;

			setCart(cartList);
			totalResultCart(cartList);
			return;
		}

		const items = cart.filter((item) => item.id !== product.id);

		setCart(items);
		totalResultCart(items);
	}

	function totalResultCart(items: cartProps[]) {
		const result = items.reduce((acc, obj) => {
			return acc + obj.total;
		}, 0);
		const resultFormated = result.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
		setTotal(resultFormated);
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				cartAmount: cart.length,
				total: total,
				addItemCart,
				removeItemCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
