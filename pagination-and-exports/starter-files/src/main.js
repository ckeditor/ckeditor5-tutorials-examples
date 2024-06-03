import {
    DecoupledEditor,
    Bold,
    Italic,
    Essentials,
    Heading,
    List,
    Link,
    Paragraph,
    Table,
    TableProperties,
    TableCellProperties,
    TableToolbar,
    Font,
    Indent,
    IndentBlock,
    BlockQuote,
    PageBreak,
    CloudServices,
} from 'ckeditor5';

import { ExportPdf, ExportWord, Pagination } from 'ckeditor5-premium-features';

import 'ckeditor5/index.css';
import 'ckeditor5-premium-features/index.css';
import './style.css'

DecoupledEditor
  .create( document.querySelector( '#editor' ), {
      plugins: [ 
        Essentials, Paragraph, Bold, Heading, Italic, Font, Indent, IndentBlock, BlockQuote, List, Link, Table, TableProperties, TableCellProperties, TableToolbar, PageBreak, CloudServices,
          // Premium plugins
          Pagination, ExportPdf, ExportWord
      ],
      toolbar: [
        'undo', 'redo',
        '|', 'previousPage', 'nextPage', 'pageNavigation',
        '|', 'exportWord', 'exportPdf',
        '|', 'heading',
        '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
        '|', 'bold', 'italic',
        '|', 'link', 'insertTable', 'blockQuote',
        '|', 'bulletedList', 'numberedList', 'outdent', 'indent'
      ],
      table: {
          contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
      },
      licenseKey: 'your-license-key',
      cloudServices: {
          tokenUrl: 'https://example.com/cs-token-endpoint'
      }
  } )
  .then( editor => {
      console.log( 'Editor was initialized', editor );

      // Add toolbar.
      const toolbarContainer = document.querySelector( '#toolbar-container' );
      toolbarContainer.appendChild( editor.ui.view.toolbar.element );

      // Expose for playing in the console.
      window.editor = editor;
  } )
  .catch( error => {
      console.error( error.stack );
  } );
