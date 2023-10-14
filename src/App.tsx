import { createBrowserRouter } from "react-router-dom";
import { Home, Cart } from "./pages";
import { Layout } from "./components";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);

export { router };
