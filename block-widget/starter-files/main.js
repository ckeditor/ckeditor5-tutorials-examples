// main.js

import {
  ClassicEditor,
  Bold,
  Italic,
  Essentials,
  Heading,
  List,
  Paragraph
} from 'ckeditor5';
import 'ckeditor5/dist/index.css';

ClassicEditor
  .create( document.querySelector( '#editor' ), {
      plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic ],
      toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList' ]
  } )
  .then( editor => {
      console.log( 'Editor was initialized', editor );

      // Expose for playing in the console.
      window.editor = editor;
  } )
  .catch( error => {
      console.error( error.stack );
  } );
