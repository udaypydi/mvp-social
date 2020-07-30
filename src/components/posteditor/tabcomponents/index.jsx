import React from 'react';
import styled from '@emotion/styled';

const SidebarContainer = styled.div`
    background: #ffffff;
    width: 20%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5%;
`;

function TabComponents(props) {
  return (
    <SidebarContainer />
  );
}

export default TabComponents;
