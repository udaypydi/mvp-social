import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import theme from 'src/theme';
import { TAB_HEADER } from './tabcomponents.constant';

const { colors } = theme;

const widthAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 20%;
    }
`;

const SidebarContainer = styled.div`
    background: #ffffff;
    width: 20%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5%;
    animation: ${widthAnimation} 1s ease;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    padding: 10px;
    color: ${colors.primaryColor};
`;

const Title = styled.h2`
    font-weight: 300;
    font-size: 20px;
    color: ${colors.primaryColor};
`;

const LeftArrow = styled(MdKeyboardArrowLeft)`
    cursor: pointer;
`;

function TabComponents({ selectedTab, onCloseSidebar }) {
  return (
    <SidebarContainer>
        <TitleContainer>
            <LeftArrow size="2em" onClick={onCloseSidebar} />
            <Title>{TAB_HEADER[selectedTab]}</Title>
        </TitleContainer>
     </SidebarContainer>   
  );
}

export default TabComponents;
