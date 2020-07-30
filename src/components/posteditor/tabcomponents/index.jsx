import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'


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

function TabComponents(props) {
  return (
    <SidebarContainer />
  );
}

export default TabComponents;
