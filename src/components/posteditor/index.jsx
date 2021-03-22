
import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import Button from 'src/uielements/button/button.component';
import EditorPreview from './editorpreview';
import TabComponents from './tabcomponents';
import Tabs from './tabs';
import VREditor from './vreditor';

import './index.scss';

const { colors } = theme;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-direction: column;
`;


function PostEditor(props) {

  const [activeSideTab, setActiveSideTab] = useState('ELEMENTS');
  const canvasRef = useRef(null);

  return (
    <Container>   
        {/* <Tabs onTabChange={setActiveSideTab} />
        <TabComponents 
          selectedTab={activeSideTab} 
          canvasRef={canvasRef} 
        />  
        <EditorPreview canvasRef={canvasRef} /> */}
        <VREditor />
    </Container>
  );
}


export default PostEditor;
