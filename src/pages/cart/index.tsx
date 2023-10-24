export default function Cart(): JSX.Element {
	return (
		<div className="w-full max-w-7xl mx-4 mx-auto">
			<h1 className="font-medium text-2xl text-center my-4">
				Meu Carrinho
			</h1>

			<section className="flex items-center justify-between border-b-2 border-gray-300">
				<img
					src="https://www.wb.com.br/upload/produto/imagem/b_fone-de-ouvido-bluetooth-wb-pods-preto.webp"
					alt="imagem do produto"
					className="w-28"
				/>

				<strong>Preço: R$1.000</strong>

				<div className="flex items-center justify-center gap-3">
					<button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
						-
					</button>
					1
					<button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
						+
					</button>
				</div>

				<strong className="float-right">SubTotal: R$1.000</strong>
			</section>
			<p className="font-bold mt-4 float-right">Total: R$1.000</p>
		</div>
	);
}
