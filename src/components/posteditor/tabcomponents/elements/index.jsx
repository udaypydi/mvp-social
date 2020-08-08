import React, { useState } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { MdCropSquare, MdImage } from 'react-icons/md';
import theme from 'src/theme';


const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 20px;
    text-align: center;
`;


function AddElements(props) {
    return (
        <Container>
            <Container direction="column">
                <MdCropSquare size="3rem" style={{ fontWeight: 'normal' }} />
                <p>Container</p>
            </Container>
            <Container direction="column">
                <MdImage size="3rem" style={{ fontWeight: 'normal' }} />
                <p>Image</p>
            </Container>
        </Container>
    );
}

export default AddElements;
