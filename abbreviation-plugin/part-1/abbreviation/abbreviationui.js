/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { ButtonView, Plugin } from 'ckeditor5';

export default class AbbreviationUI extends Plugin {
	init() {
		const editor = this.editor;

		// Register the button in the editor's UI component factory.
		editor.ui.componentFactory.add( 'abbreviation', () => {
			const button = new ButtonView();

			button.label = 'Abbreviation';
			button.tooltip = true;
			button.withText = true;

			this.listenTo( button, 'execute', () => {
				const title = 'What You See Is What You Get';
				const abbr = 'WYSIWYG';

				// Change the model to insert the abbreviation.
				editor.model.change( writer => {
					editor.model.insertContent(
						// Create a text node with the abbreviation attribute.
						writer.createText( abbr, { abbreviation: title } )
					);
				} );
			} );

			return button;
		} );
	}
}
