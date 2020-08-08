import React, { useState } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { MdCropSquare } from 'react-icons/md';
import theme from 'src/theme';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 20px;
`;


function AddElements(props) {
    return (
        <Container>
            <div>
                <MdCropSquare size="2rem" />
                <p>Container</p>
            </div>
        </Container>
    );
}

export default AddElements;
