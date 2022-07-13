import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class AbbreviationUI extends Plugin {
	init() {
		const editor = this.editor;
        // The translation function.
		const { t } = editor.locale;

        // Register the button in the editor's UI component factory.
		editor.ui.componentFactory.add( 'abbreviation', locale => {
			const button = new ButtonView( locale );
			
            // The localized label.
			button.label = t( 'Abbreviation' );
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
