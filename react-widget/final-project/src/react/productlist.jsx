import ProductPreview from './productpreview';

export default function ProductList( props ) {
	return (
		<div className='app__product-list'>
			<h3>Products</h3>
			<ul>
				{props.products.map( ( product ) => {
					return (
						<li key={ product.id }>
							<ProductPreview
								id={ product.id }
								onClick={ props.onClick }
								{ ...product }
							/>
						</li>
					);
				})}
			</ul>
			<p><b>Tip</b>: Clicking the product will add it to the editor.</p>
		</div>
	);
}
