import React from 'react';
import styled from '@emotion/styled';
import { Paragraph } from 'src/commons/text';
import theme from 'src/theme';
import { TABS } from './tabs.constant';

const { colors } = theme;

const SidebarContainer = styled.div`
    width: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    position: absolute;
    right: 0;
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
    padding: 5px;
    &:hover {
        color: ${colors.primaryColor} !important;
    }
`;

function Tabs(props) {
    return (
        <SidebarContainer>

                {
                    TABS.map(tab =>(
                        <Container>
                            <tab.icon />
                            <Paragraph fontSize="12px">{tab.name}</Paragraph>
                        </Container>    
                    ))
                }
        </SidebarContainer>
    );
}

export default Tabs;
