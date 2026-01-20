import { Command } from 'ckeditor5';

export default class ToggleSimpleBoxSecretCommand extends Command {
	refresh() {
		const editor = this.editor;
		const element = getClosestSelectedSimpleBoxElement( editor.model.document.selection );

		this.isEnabled = !!element;
		this.value = !!( element && element.getAttribute( 'secret' ) );
	}

	execute( options = {} ) {
		const editor = this.editor;
		const model = editor.model;
		const simpleBox = getClosestSelectedSimpleBoxElement( model.document.selection );

		// Toggle the current state if no value is provided.
		const newValue = options.value === undefined ? !this.value : options.value;

		if ( simpleBox ) {
			model.change( writer => {
				if ( newValue ) {
					writer.setAttribute( 'secret', true, simpleBox );
				} else {
					writer.removeAttribute( 'secret', simpleBox );
				}
			} );
		}
	}
}

function getClosestSelectedSimpleBoxElement( selection ) {
	const selectedElement = selection.getSelectedElement();

	if ( !!selectedElement && selectedElement.is( 'element', 'simpleBox' ) ) {
		return selectedElement;
	} else {
		return selection.getFirstPosition().findAncestor( 'simpleBox' );
	}
}
