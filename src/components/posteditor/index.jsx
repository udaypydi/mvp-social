
import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import Button from 'src/uielements/button/button.component';
import EditorPreview from './editorpreview';
import TabComponents from './tabcomponents';
import Tabs from './tabs';
import VREditor from './vreditor';
import WebEditor from './vveditor';

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
  const [activeEditor, setActiveEditor] = useState('WEB');
  const canvasRef = useRef(null);

  return (
    <>   
    {activeEditor === 'CANVAS' && (
      <>
        <Tabs onTabChange={setActiveSideTab} />
        <TabComponents 
          selectedTab={activeSideTab} 
          canvasRef={canvasRef} 
        />  
        <EditorPreview canvasRef={canvasRef} />
      </>
    )}
    {
      activeEditor === 'WEB' && (
        <WebEditor />
      )
    }
    {
      activeEditor === 'VR' && (
        <VREditor />
      )
    }

    </>
  );
}


export default PostEditor;
