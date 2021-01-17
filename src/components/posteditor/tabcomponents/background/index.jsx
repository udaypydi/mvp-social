import React, { useState } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { CirclePicker as ColorPicker } from 'react-color';
import theme from 'src/theme';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
`;


function BackgroundTab(props) {
  const [background, setBackground] = useState('#ffffff');

  return (
    <Container>
      <ColorPicker
        onChangeComplete={(color) => {
          setBackground(color.hex);
        }}
      />
    </Container>
  );
}

export default BackgroundTab;
