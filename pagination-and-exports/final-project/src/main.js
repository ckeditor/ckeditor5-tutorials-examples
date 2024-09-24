import {
	DecoupledEditor,
	Bold,
	Italic,
	Essentials,
	Heading,
	List,
	Link,
	Paragraph,
	Table,
	TableProperties,
	TableCellProperties,
	TableToolbar,
	Font,
	Indent,
	IndentBlock,
	BlockQuote,
	PageBreak,
	CloudServices
} from 'ckeditor5';

import { ExportPdf, ExportWord, Pagination } from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import './style.css';

DecoupledEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			Essentials, Paragraph, Bold, Heading, Italic, Font,
			Indent, IndentBlock, BlockQuote, List, Link,
			Table, TableProperties, TableCellProperties, TableToolbar,
			PageBreak, CloudServices,
			// Premium plugins
			Pagination, ExportPdf, ExportWord
		],
		toolbar: [
			'undo', 'redo',
			'|', 'previousPage', 'nextPage', 'pageNavigation',
			'|', 'exportWord', 'exportPdf',
			'|', 'heading',
			'|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
			'|', 'bold', 'italic',
			'|', 'link', 'insertTable', 'blockQuote',
			'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
		],
		table: {
			contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
		},
		licenseKey: '<YOUR_LICENSE_KEY>',
		cloudServices: {
			tokenUrl: 'https://example.com/cs-token-endpoint'
		},
		pagination: {
			// Page width and height reflect the A4 format.
			pageWidth: '21cm',
			pageHeight: '29.7cm',
			pageMargins: {
				top: '20mm',
				bottom: '20mm',
				right: '12mm',
				left: '12mm'
			}
		},
		exportPdf: {
			fileName: 'my-sample-file.pdf',
			stylesheets: [
				'./ckeditor5.css',
				'./ckeditor5-premium-features.css',
				'./style.css'
			],
			converterOptions: {
				format: 'A4',
				margin_top: '20mm',
				margin_bottom: '20mm',
				margin_right: '12mm',
				margin_left: '12mm',
				page_orientation: 'portrait'
			}
		},
		exportWord: {
			fileName: 'my-sample-file.docx',
			stylesheets: [
				'./ckeditor5.css',
				'./ckeditor5-premium-features.css',
				'./style.css'
			],
			converterOptions: {
				document: {
					size: 'A4',
					margin: {
						top: '20mm',
						bottom: '20mm',
						right: '12mm',
						left: '12mm'
					}
				}
			}
		}
	} )
	.then( editor => {
		console.log( 'Editor was initialized', editor );

		// Add toolbar.
		const toolbarContainer = document.querySelector( '#toolbar-container' );
		toolbarContainer.appendChild( editor.ui.view.toolbar.element );

		// Expose for playing in the console.
		window.editor = editor;
	} )
	.catch( error => {
		console.error( error.stack );
	} );
