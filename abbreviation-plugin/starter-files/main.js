/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { Bold, ClassicEditor, Essentials, Heading, Italic, List, Paragraph } from 'ckeditor5';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import Abbreviation from './abbreviation/abbreviation';
import 'ckeditor5/ckeditor5.css';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Essentials, Bold, Italic, Heading, List, Paragraph, Abbreviation ],
		toolbar: [ 'heading', '|', 'bold', 'italic', 'numberedList', 'bulletedList' ],
		licenseKey: 'GPL'
	} )
	.then( editor => {
		console.log( 'Editor was initialized', editor );
		CKEditorInspector.attach( editor );
	} )
	.catch( error => {
		console.error( error.stack );
	} );
