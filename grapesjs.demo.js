import React, { useEffect } from "react";

// grapesjs package

import grapesjs from "grapesjs";
import "./styles.css";


// grapes js editor demo 

export default function App() {
  useEffect(() => {
    grapesjs.init({
      container: "test-editor",
      fromElement: true
    });
  }, []);

  return (
    <div className="App">
      <div id="test-editor"></div>
    </div>
  );
}
