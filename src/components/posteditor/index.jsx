
import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import Button from 'src/uielements/button/button.component';
import EditorPreview from './editorpreview';
import TabComponents from './tabcomponents';
import Tabs from './tabs';
import VREditor from './vreditor';
import WebEditor from './vveditor';
import CustomEditor from './customeditor/';


import './index.scss';

const { colors } = theme;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-direction: column;
`;


function getParameters( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    const regexS = "[\\?&]"+name+"=([^&#]*)";
    const regex = new RegExp( regexS );
    const results = regex.exec( url );
    return results == null ? null : results[1];
}


function PostEditor(props) {

  const [activeSideTab, setActiveSideTab] = useState('ELEMENTS');
  const [activeEditor, setActiveEditor] = useState('CANVAS');
  const canvasRef = useRef(null);

  useEffect(() => {
    const editorType = getParameters('editor', window.location.href);
    if (editorType === 'vr') {
      setActiveEditor('VR');
    }
  }, [])

  return (
    <>   
    {activeEditor === 'CANVAS' && (
      <>
        {/* <Tabs onTabChange={setActiveSideTab} />
        <TabComponents 
          selectedTab={activeSideTab} 
          canvasRef={canvasRef} 
        />  
        <EditorPreview canvasRef={canvasRef} /> */}
        <CustomEditor />
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
