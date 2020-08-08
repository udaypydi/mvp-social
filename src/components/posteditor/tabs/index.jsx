import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Paragraph } from 'src/commons/text';
import theme from 'src/theme';
import { TABS } from './tabs.constant';

const { colors } = theme;

const SidebarContainer = styled.div`
    width: ${(props) => props.width || '5%'};
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    border: ${(props) => props.border || 'none'};
    padding
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    -webkit-box-shadow: -15px 8px 33px -15px rgba(0,0,0,0.31);
    -moz-box-shadow: -15px 8px 33px -15px rgba(0,0,0,0.31);
    box-shadow: -15px 8px 33px -15px rgba(0,0,0,0.31);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 100%;
    padding: 7px;
    color: ${props => props.color || '#000000'};
    &:hover {
        color: ${colors.primaryColor} !important;
    }
`;

function Tabs({ onTabChange }) {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <SidebarContainer border={selectedTab ? '1px solid #EEEEEE' : 'none'}>
      {
                TABS.map((tab) => (
                  <Container
                    onClick={(e) => {
                      onTabChange(tab.key);
                      setSelectedTab(tab.key);
                    }}
                    key={tab.key}
                    color={selectedTab === tab.key ? colors.primaryColor : '#000000'} 
                  >
                    <tab.icon />
                    <Paragraph fontSize="12px">{tab.name}</Paragraph>
                  </Container>
                ))
            }
    </SidebarContainer>
  );
}

export default Tabs;
