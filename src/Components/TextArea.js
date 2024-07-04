  import React from 'react';
  import '@spectrum-web-components/textfield/sp-textfield.js';
  import { Textfield } from '@spectrum-web-components/textfield';


  function TextArea() {
    return (
      <>
       <sp-field-label size="xl" for="name-0-xl">Name</sp-field-label>
  <sp-textfield
      size="xl"
      id="name-0-xl"
      placeholder="Enter your name"
  ></sp-textfield>
      </>
 

    );
  }

  export default TextArea;