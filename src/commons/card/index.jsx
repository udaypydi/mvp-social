import React from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';

const { colors } = theme;

export const BasicCard = styled.div`
    display: flex;
    height: ${(props) => props.height || '200 px'};
    width: ${(props) => props.width || '200px'};
    border-radius: 5px;
    border: 1px solid ${colors.basicCard};
    background-color: ${colors.basicCard};
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        -webkit-box-shadow: 0px 0px 33px -36px rgba(0,0,0,0.31);
-moz-box-shadow: 0px 0px 33px -36px rgba(0,0,0,0.31);
box-shadow: 0px 0px 33px -36px rgba(0,0,0,0.31);
    }
`;
