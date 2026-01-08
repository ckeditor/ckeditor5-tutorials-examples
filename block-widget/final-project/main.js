import {
	ClassicEditor,
	Bold,
	Italic,
	Essentials,
	Heading,
	List,
	Paragraph
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import SimpleBox from './simplebox/simplebox';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Essentials, Bold, Italic, Heading, List, Paragraph, SimpleBox ],
		toolbar: [ 'heading', '|', 'bold', 'italic', 'numberedList', 'bulletedList', 'simpleBox' ],
		simpleBox: {
			toolbar: [ 'secretSimpleBox' ]
		},
		licenseKey: 'GPL'
	} )
	.then( editor => {
		console.log( 'Editor was initialized', editor );

		CKEditorInspector.attach( { editor } );
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
