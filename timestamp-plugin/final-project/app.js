/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { 
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Italic,
  Paragraph,
  List,
  Plugin,
  ButtonView
} from 'ckeditor5';
import 'ckeditor5/dist/index.css';

class Timestamp extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'timestamp', () => {
			// The button will be an instance of ButtonView.
			const button = new ButtonView();

			button.set( {
				label: 'Timestamp',
				withText: true
			} );

			//Execute a callback function when the button is clicked
			button.on( 'execute', () => {
				const now = new Date();

				//Change the model using the model writer
				editor.model.change( writer => {

					//Insert the text at the user's current position
					editor.model.insertContent( writer.createText( now.toString() ) );
				} );
			} );

			return button;
		} );
	}
}

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic, Timestamp ],
		toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList', 'timestamp' ]
	} )
	.then( editor => {
		console.log( 'Editor was initialized', editor );
	} )
	.catch( error => {
		console.error( error.stack );
	} );
	