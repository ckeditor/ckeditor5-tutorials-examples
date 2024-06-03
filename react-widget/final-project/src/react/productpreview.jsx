export default function ProductPreview( props ) {
	return (
		<div
			className='product-preview'
			style={ {
				'--product-image': `url(${ props.image })`
			} }
		>
			<button
				className='product-preview__add'
				onClick={ () => props.onClick( props.id ) }
				title='Add to the offer'
			>
				<span>+</span>
			</button>
			<span className='product-preview__name'>{ props.name }</span>
			<span className='product-preview__price'>from { props.price }</span>
		</div>
	);
}
