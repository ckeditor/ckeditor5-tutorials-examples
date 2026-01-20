import {
	ClassicEditor,
	Bold,
	Italic,
	Essentials,
	Heading,
	List,
	Paragraph
} from 'ckeditor5';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import 'ckeditor5/ckeditor5.css';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic ],
		toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList' ],
		licenseKey: 'GPL'
	} )
	.then( editor => {
		console.log( 'Editor was initialized', editor );
		CKEditorInspector.attach( { editor } );

		// Expose for playing in the console.
		window.editor = editor;
	} )
	.catch( error => {
		console.error( error.stack );
	} );
