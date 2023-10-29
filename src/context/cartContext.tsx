import { createContext, ReactNode, useState } from "react";

interface CartContextProps {
	cart: cartProps;
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

	return (
		<CartContext.Provider value={{ cart, amount: cart.length }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
