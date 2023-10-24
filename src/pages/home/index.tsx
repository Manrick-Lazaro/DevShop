import { BsCartPlus } from "react-icons/bs";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

interface iProducts {
	id: number;
	title: string;
	description: string;
	price: number;
	cover: string;
}

export default function Home(): JSX.Element {
	const [products, setProducts] = useState<iProducts[]>([]);

	useEffect(() => {
		async function getProducts() {
			const response = await api.get("products");
			setProducts(response.data);
		}

		getProducts();
	}, []);
	return (
		<main className="w-full max-w-7xl px-4 mx-auto ">
			<h1 className="font-bold text-2xl mb-4 mt-10 text-center">
				Produtos em Alta
			</h1>

			<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
				{products.map((product) => (
					<section
						className="w-full "
						key={product.id}
					>
						<img
							className="w-full rounded-lg max-h-70 mb-2"
							src={product.cover}
							alt={product.title}
						/>
						<p className="font-medium mb-2 mt-1">{product.title}</p>
						<div className="flex gap-3 items-center">
							<strong className="text-zinc-700/90">
								{product.price.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})}
							</strong>
							<button className="bg-zinc-900 p-1 rounded">
								<BsCartPlus
									size={20}
									color="#FFF"
								/>
							</button>
						</div>
					</section>
				))}
			</div>
		</main>
	);
}
