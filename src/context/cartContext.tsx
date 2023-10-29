import { createContext, ReactNode, useState } from "react";
import type { iProducts } from "../pages/home";

interface CartContextProps {
	cart: cartProps;
	cartAmount: number;
	addItemCart: (newItem: iProducts) => void
}

interface cartProps {
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

	function addItemCart(newItem: iProducts) {
		const indexItem = cart.findIndex(item => item.id === newItem.id);

		if(indexItem !== -1) {
			const cartList = cart;

			cartList[indexItem].amount = cartList[indexItem].amount += 1;
			cartList[indexItem].total = cartList[indexItem].price * cartList[indexItem].amount;

			setCart(cartList);
			return;
		}

		const data = {
			...newItem,
			amount: 1,
			total: newItem.price,
		}

		setCart(products => [...products, data]);
	}

	return (
		<CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCart }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
