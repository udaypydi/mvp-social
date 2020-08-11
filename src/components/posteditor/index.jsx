import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import Editor from 'grapesjs-react';
import { TEMPLATE } from './templates';
import Tabs from './tabs';
import TabComponents from './tabcomponents';
import EditorPreview from './editorpreview';
import 'grapesjs/dist/css/grapes.min.css';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const AnimatedTabComponent = styled(animated(TabComponents))``;


function PostEditor(props) {
  const [selectedTab, setSelectedTab] = useState('TEMPLATES');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const springProps = useSpring({
    from: { width: 0 },
    to: { width: 200 },
  });

  useEffect(() => {
    if (selectedTab) {
      setIsSidebarOpen(true);
    }
  }, [selectedTab]);

  return (
    <>
      {/* <Tabs onTabChange={setSelectedTab} />
      {
            isSidebarOpen && (
            <AnimatedTabComponent
              selectedTab={selectedTab}
              style={{ springProps }}
              onCloseSidebar={() => setIsSidebarOpen(false)}
            />
            )
        }
        <EditorPreview 
            isSidebarOpen={isSidebarOpen}
            template={TEMPLATE}
        /> */}
        <Editor 
        id="test" presetType="webpage"/>
    </>
  );
}

export default PostEditor;
