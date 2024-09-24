/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

const { 
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Italic,
  Paragraph,
  List
} =  CKEDITOR;

ClassicEditor
	.create( document.querySelector( '#editor' ), {
    licenseKey: 'GPL',
		plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic ],
		toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList' ]
	} )
	.then( editor => {
		console.log( 'Editor was initialized', editor );
	} )
	.catch( error => {
		console.error( error.stack );
	} );
