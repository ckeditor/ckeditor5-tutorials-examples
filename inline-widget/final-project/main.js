import {
  ClassicEditor,
  Bold,
  Italic,
  Essentials,
  Heading,
  List,
  Paragraph,
  Command,
  Plugin,
  Widget,
  toWidget,
  viewToModelPositionOutsideModelElement,
  ViewModel,
  addListToDropdown,
  createDropdown,
  Collection
} from 'ckeditor5';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import 'ckeditor5/index.css';

class Placeholder extends Plugin {
  static get requires() {
      return [ PlaceholderEditing, PlaceholderUI ];
  }
}

class PlaceholderCommand extends Command {
  execute( { value } ) {
      const editor = this.editor;
      const selection = editor.model.document.selection;

      editor.model.change( writer => {
          // Create a <placeholder> element with the "name" attribute (and all the selection attributes)...
          const placeholder = writer.createElement( 'placeholder', {
              ...Object.fromEntries( selection.getAttributes() ),
              name: value
          } );

          // ... and insert it into the document. Put the selection on the inserted element.
          editor.model.insertObject( placeholder, null, null, { setSelection: 'on' } );
      } );
  }

  refresh() {
      const model = this.editor.model;
      const selection = model.document.selection;

      const isAllowed = model.schema.checkChild( selection.focus.parent, 'placeholder' );

      this.isEnabled = isAllowed;
  }
}

class PlaceholderUI extends Plugin {
  init() {
      const editor = this.editor;
      const t = editor.t;
      const placeholderNames = editor.config.get( 'placeholderConfig.types' );

      // The "placeholder" dropdown must be registered among the UI components of the editor
      // to be displayed in the toolbar.
      editor.ui.componentFactory.add( 'placeholder', locale => {
          const dropdownView = createDropdown( locale );

          // Populate the list in the dropdown with items.
          addListToDropdown( dropdownView, getDropdownItemsDefinitions( placeholderNames ) );

          dropdownView.buttonView.set( {
              // The t() function helps localize the editor. All strings enclosed in t() can be
              // translated and change when the language of the editor changes.
              label: t( 'Placeholder' ),
              tooltip: true,
              withText: true
          } );

          // Disable the placeholder button when the command is disabled.
          const command = editor.commands.get( 'placeholder' );
          dropdownView.bind( 'isEnabled' ).to( command );

          // Execute the command when the dropdown item is clicked (executed).
          this.listenTo( dropdownView, 'execute', evt => {
              editor.execute( 'placeholder', { value: evt.source.commandParam } );
              editor.editing.view.focus();
          } );

          return dropdownView;
      } );
  }
}

function getDropdownItemsDefinitions( placeholderNames ) {
  const itemDefinitions = new Collection();

  for ( const name of placeholderNames ) {
      const definition = {
          type: 'button',
          model: new ViewModel( {
              commandParam: name,
              label: name,
              withText: true
          } )
      };

      // Add the item definition to the collection.
      itemDefinitions.add( definition );
  }

  return itemDefinitions;
}

class PlaceholderEditing extends Plugin {
  static get requires() {
      return [ Widget ];
  }

  init() {
      console.log( 'PlaceholderEditing#init() got called' );

      this._defineSchema();
      this._defineConverters();

      this.editor.commands.add( 'placeholder', new PlaceholderCommand( this.editor ) );

      this.editor.editing.mapper.on(
          'viewToModelPosition',
          viewToModelPositionOutsideModelElement( this.editor.model, viewElement => viewElement.hasClass( 'placeholder' ) )
      );
      this.editor.config.define( 'placeholderConfig', {
          types: [ 'date', 'first name', 'surname' ]
      } );
  }

  _defineSchema() {
      const schema = this.editor.model.schema;

      schema.register( 'placeholder', {
          // Behaves like a self-contained inline object (e.g. an inline image)
          // allowed in places where $text is allowed (e.g. in paragraphs).
          // The inline widget can have the same attributes as text (for example linkHref, bold).
          inheritAllFrom: '$inlineObject',

          // The placeholder can have many types, like date, name, surname, etc:
          allowAttributes: [ 'name' ]
      } );
  }

  _defineConverters() {
      const conversion = this.editor.conversion;

      conversion.for( 'upcast' ).elementToElement( {
          view: {
              name: 'span',
              classes: [ 'placeholder' ]
          },
          model: ( viewElement, { writer: modelWriter } ) => {
              // Extract the "name" from "{name}".
              const name = viewElement.getChild( 0 ).data.slice( 1, -1 );

              return modelWriter.createElement( 'placeholder', { name } );
          }
      } );

      conversion.for( 'editingDowncast' ).elementToElement( {
          model: 'placeholder',
          view: ( modelItem, { writer: viewWriter } ) => {
              const widgetElement = createPlaceholderView( modelItem, viewWriter );

              // Enable widget handling on a placeholder element inside the editing view.
              return toWidget( widgetElement, viewWriter );
          }
      } );

      conversion.for( 'dataDowncast' ).elementToElement( {
          model: 'placeholder',
          view: ( modelItem, { writer: viewWriter } ) => createPlaceholderView( modelItem, viewWriter )
      } );

      // Helper method for both downcast converters.
      function createPlaceholderView( modelItem, viewWriter ) {
          const name = modelItem.getAttribute( 'name' );

          const placeholderView = viewWriter.createContainerElement( 'span', {
              class: 'placeholder'
          } );

          // Insert the placeholder name (as a text).
          const innerText = viewWriter.createText( '{' + name + '}' );
          viewWriter.insert( viewWriter.createPositionAt( placeholderView, 0 ), innerText );

          return placeholderView;
      }
  }
}

ClassicEditor
  .create( document.querySelector( '#editor' ), {
      plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic, Placeholder ],
      toolbar: [ 'heading', '|', 'bold', 'italic', 'numberedList', 'bulletedList', '|', 'placeholder' ],
      placeholderConfig: {
          types: [ 'date', 'color', 'first name', 'surname' ]
      }
  } )
  .then( editor => {
      console.log( 'Editor was initialized', editor );

      CKEditorInspector.attach( { 'editor': editor } );

      // Expose for playing in the console.
      window.editor = editor;
  } )
  .catch( error => {
      console.error( error.stack );
  } );
