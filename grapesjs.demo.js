import React, { useEffect } from "react";
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
