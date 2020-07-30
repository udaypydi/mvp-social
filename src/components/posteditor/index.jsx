import React, { useState } from 'react';
import styled from '@emotion/styled';
import Tabs from './tabs';
import TabComponents from './tabcomponents';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EditorCard = styled.div`
    height: ${(props) => props.height || '40%'};
    width: ${(props) => props.width || '40%'};
    background: #ffffff;
    -webkit-box-shadow: -15px -10px 33px -22px rgba(0,0,0,0.31);
    -moz-box-shadow: -15px -10px 33px -22px rgba(0,0,0,0.31);
    box-shadow: -15px -10px 33px -22px rgba(0,0,0,0.31);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function PostEditor(props) {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <Container>
      <Tabs onTabChange={setSelectedTab} />
      {
                selectedTab && <TabComponents />
            }
      <EditorCard />
    </Container>
  );
}

export default PostEditor;
