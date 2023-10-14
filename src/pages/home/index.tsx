import { BsCartPlus } from "react-icons/bs";

export default function Home(): JSX.Element {
	return (
		<main className="w-full max-w-7xl px-4 mx-auto ">
			<h1 className="font-bold text-2xl mb-4 mt-10 text-center">
				Produtos em Alta
			</h1>

			<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
				<section className="w-full ">
					<img
                        className="w-full rounded-lg max-h-70 mb-2"
						src="https://www.wb.com.br/upload/produto/imagem/b_fone-de-ouvido-bluetooth-wb-pods-preto.webp"
						alt="imagem de fones"
					/>
					<p className="font-medium mb-2 mt-1">Airpods pro</p>
					<div className="flex gap-3 items-center">
						<strong className="text-zinc-700/90">1000</strong>
						<button className="bg-zinc-900 p-1 rounded">
							<BsCartPlus
								size={20}
								color="#FFF"
							/>
						</button>
					</div>
				</section>
			</div>
		</main>
	);
}
