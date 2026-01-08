import { Plugin, WidgetToolbarRepository, isWidget } from 'ckeditor5';

export default class SimpleBoxToolbar extends Plugin {
	static get requires() {
		return [ WidgetToolbarRepository ];
	}

	afterInit() {
		const editor = this.editor;
		const widgetToolbarRepository = editor.plugins.get( WidgetToolbarRepository );

		widgetToolbarRepository.register( 'simpleBoxToolbar', {
			items: editor.config.get( 'simpleBox.toolbar' ),
			getRelatedElement: getClosestSimpleBoxWidget
		} );
	}
}

function getClosestSimpleBoxWidget( selection ) {
	const selectionPosition = selection.getFirstPosition();

	if ( !selectionPosition ) {
		return null;
	}

	const viewElement = selection.getSelectedElement();

	if ( viewElement && isSimpleBoxWidget( viewElement ) ) {
		return viewElement;
	}

	let parent = selectionPosition.parent;

	while ( parent ) {
		if ( parent.is( 'element' ) && isSimpleBoxWidget( parent ) ) {
			return parent;
		}

		parent = parent.parent;
	}

	return null;
}

function isSimpleBoxWidget( viewElement ) {
	return !!viewElement.getCustomProperty( 'simpleBox' ) && isWidget( viewElement );
}
