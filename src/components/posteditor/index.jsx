
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
      container: '#gjs',
      fromElement: true,
      height: '80%',
      width: '80%',
      storageManager: false,
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
