// Imports necessary to run a React application.
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
// The official <CKEditor> component for React.
import { CKEditor } from '@ckeditor/ckeditor5-react';
// The base editor class and features required to run the editor.
import {
	ClassicEditor,
	Bold,
	Italic,
	Underline,
	Essentials,
	Heading,
	Link,
	Paragraph,
	Table,
	TableToolbar
} from 'ckeditor5';
// The official CKEditor 5 instance inspector. It helps understand the editor view and model.
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
// CKEditor plugin implementing a product widget to be used in the editor content.
import ProductPreviewEditing from './ckeditor/productpreviewediting';
// React components to render the list of products and the product preview.
import ProductList from './react/productlist';
import ProductPreview from './react/productpreview';
import 'ckeditor5/ckeditor5.css';
import './styles.css';

// The React application function component. It renders the editor and the product list.
export default function App( props ) {
	// A place to store the reference to the editor instance created by the <CKEditor> component.
	// The editor instance is created asynchronously and is only available when the editor is ready.
	const [ editorRef, setEditorRef ] = useState( null );
	// The initial editor data. It is bound to the editor instance and will change as
	// the user types and modifies the content of the editor.
	const [ editorData, setEditorData ] = useState( `<h2>Check our last minute deals!</h2>

	<p>
		Aenean erat conubia pretium libero habitant turpis vivamus dignissim molestie, phasellus libero!
		Curae; consequat cubilia mattis. Litora non iaculis tincidunt.
	</p>
	<section class="product" data-id="2">&nbsp;</section>
	<p>
		Mollis gravida parturient ad maecenas euismod consectetur lacus rutrum urna eget ligula.
		Nisi imperdiet scelerisque natoque scelerisque cubilia nulla gravida.
		Eleifend malesuada pharetra est commodo venenatis aenean habitasse curae; fusce elit.
	</p>
	<section class="product" data-id="1">&nbsp;</section>

	<h3>Other deals</h3>
	<p>
		Ultricies dapibus placerat orci natoque fames commodo facilisi sollicitudin.
		Sed hendrerit mi dis non lacinia ipsum. Luctus fames scelerisque auctor pellentesque mi nunc mattis, amet sapien.
	</p>

	<figure class="table">
		<table>
			<thead>
				<tr>
					<th>Our deal</th>
					<th>Why this one?</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<section class="product" data-id="3">&nbsp;</section>
					</td>
					<td>
						Nascetur, nullam hac nibh curabitur elementum. Est ridiculus turpis adipiscing erat maecenas habitant montes.
						Curabitur mauris ut luctus semper. Neque orci auctor luctus accumsan quam cursus purus condimentum dis?
					</td>
				</tr>
				<tr>
					<td>
						<section class="product" data-id="4">&nbsp;</section>
					</td>
					<td>
						Elementum condimentum convallis porttitor cubilia consectetur cum. In pretium neque accumsan pharetra.
						Magna in quisque dignissim praesent facilisi diam. Ad habitant ultricies at faucibus.
						Ultricies auctor sodales massa nisi eget sem porta?
					</td>
				</tr>
			</tbody>
		</table>
	</figure>` );

	return (
		// The application renders two columns:
		// * in the left one, the <CKEditor> and the textarea displaying live
		//   editor data are rendered.
		// * in the right column, a <ProductList> is rendered with available <ProductPreviews>
		//   to choose from.
		<div ref={ setEditorRef } className='app'>
			{ editorRef && <>
				<div className='app__offer-editor' key='offer-editor'>
					<CKEditor
						editor={ ClassicEditor }
						// The configuration of the <CKEditor> instance.
						config={ {
							plugins: [
								// A set of editor features to be enabled and made available to the user.
								Essentials, Heading, Bold, Italic, Underline,
								Link, Paragraph, Table, TableToolbar,
								// Your custom plugin implementing the widget is loaded here.
								ProductPreviewEditing
							],
							toolbar: [
								'heading',
								'|',
								'bold', 'italic', 'underline',
								'|',
								'link', 'insertTable',
								'|',
								'undo', 'redo'
							],
							table: {
								contentToolbar: [
									'tableColumn',
									'tableRow',
									'mergeTableCells'
								]
							},
							// The configuration of the Products plugin. It specifies a function that will allow
							// the editor to render a React <ProductPreview> component inside a product widget.
							products: {
								productRenderer: ( id, domElement ) => {
									const product = props.products.find( product => product.id === id );
									const root = createRoot( domElement );

									root.render(
										<ProductPreview id={ id } { ...product } />
									);
								}
							},
							licenseKey: 'GPL'
						} }
						data={ editorData }
						onReady={ editor => {
							// A function executed when the editor has been initialized and is ready.
							// It synchronizes the initial data state and saves the reference to the editor instance.
							setEditorRef( editor );
							// CKEditor&nbsp;5 inspector allows you to take a peek into the editor's model and view
							// data layers. Use it to debug the application and learn more about the editor.
							CKEditorInspector.attach( editor );
						} }
						onChange={ ( evt, editor ) => {
							// A function executed when the user types or modifies the editor content.
							// It updates the state of the application.
							setEditorData( editor.getData() );
						} }
					/>
				</div>
				<ProductList
					key='product-list'
					products={ props.products }
					onClick={ id => {
						editorRef.execute( 'insertProduct', id );
						editorRef.editing.view.focus();
					} }
				/>
			</> }
		</div>
	);
}
