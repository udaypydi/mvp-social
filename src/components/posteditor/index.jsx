
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import './index.scss';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;


function PostEditor(props) {
  let editor;

  useEffect(() => {
    editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '300px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: { defaults: [] },
    });
  }, []);

  return (
    <Container>
      <div id="gjs">
        <p>Demo Editor</p>
      </div>
    </Container>
  );
}


export default PostEditor;
