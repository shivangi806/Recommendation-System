import React from "react";
import "./App.css";
import { Textfield } from "@spectrum-web-components/textfield";
import "@spectrum-web-components/textfield/sp-textfield.js";

function App() {
  return (
    <div>
      <sp-field-label for="story-0-m">Background</sp-field-label>
      <sp-textfield
        id="story-0-m"
        multiline
        placeholder="Enter your life story"
      ></sp-textfield>
    </div>
  );
}

export default App;
