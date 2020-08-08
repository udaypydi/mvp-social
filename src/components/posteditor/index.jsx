import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

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
    margin-left: ${props => props.marginLeft || '0'};
`;

const AnimatedTabComponent = styled(animated(TabComponents))``;


function PostEditor(props) {
  const [selectedTab, setSelectedTab] = useState('');
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
    <Container>
      <Tabs onTabChange={setSelectedTab} />
        {
            isSidebarOpen && (
                <AnimatedTabComponent  
                    selectedTab={selectedTab} 
                    style={{ springProps }} 
                    onCloseSidebar={() => setIsSidebarOpen(false)}
                />
            )
        }
      <EditorCard 
        marginLeft={isSidebarOpen ? '10%' : 0} 
      />
    </Container>
  );
}

export default PostEditor;
