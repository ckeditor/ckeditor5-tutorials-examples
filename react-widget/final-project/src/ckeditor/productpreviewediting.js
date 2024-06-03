import { Plugin, Widget, toWidget } from 'ckeditor5';

import InsertProductPreviewCommand from './insertproductpreviewcommand';

export default class ProductPreviewEditing extends Plugin {
    static get requires() {
        return [ Widget ];
    }

    init() {
        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add( 'insertProduct', new InsertProductPreviewCommand( this.editor ) );
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register( 'productPreview', {
            isObject: true,
            allowWhere: '$block',
            allowAttributes: [ 'id' ]
        } );
    }

    _defineConverters() {
        const editor = this.editor;
        const conversion = editor.conversion;
        const renderProduct = editor.config.get( 'products' ).productRenderer;

        conversion.for( 'upcast' ).elementToElement( {
            view: {
                name: 'section',
                classes: 'product'
            },
            model: ( viewElement, { writer: modelWriter } ) => {
                return modelWriter.createElement( 'productPreview', {
                    id: parseInt( viewElement.getAttribute( 'data-id' ) )
                } );
            }
        } );

        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'productPreview',
            view: ( modelElement, { writer: viewWriter } ) => {
                return viewWriter.createEmptyElement( 'section', {
                    class: 'product',
                    'data-id': modelElement.getAttribute( 'id' )
                } );
            }
        } );

        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'productPreview',
            view: ( modelElement, { writer: viewWriter } ) => {
                const id = modelElement.getAttribute( 'id' );
                const section = viewWriter.createContainerElement( 'section', {
                    class: 'product',
                    'data-id': id
                } );
                const reactWrapper = viewWriter.createRawElement( 'div', {
                    class: 'product__react-wrapper'
                }, function( domElement ) {
                    renderProduct( id, domElement );
                } );

                viewWriter.insert( viewWriter.createPositionAt( section, 0 ), reactWrapper );

                return toWidget( section, viewWriter, { label: 'product preview widget' } );
            }
        } );
    }
}
