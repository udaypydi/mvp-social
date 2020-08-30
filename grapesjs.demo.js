import React, { useEffect } from "react";

import grapesjs from "grapesjs";

// demo grape js

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
