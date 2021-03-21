import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { CirclePicker as ColorPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';

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

const ColorInput = styled(EditableInput)`
  border: 1px solid #ccc !important;
  padding: 5px;
  border-radius: 5px;
`;

function BackgroundTab({ canvasRef }) {
  const [background, setBackground] = useState('#ffffff');

  function setCanvasBackgroundColor({ hex }) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setBackground(hex);
  }

  return (
    <Container>
      <ColorPicker
        onChangeComplete={setCanvasBackgroundColor}
        circleSize={30}
      >
        <ColorInput 
          style={{
            border: '1px solid #ccc'
          }}
          onChange={setCanvasBackgroundColor}
          value={background}
        />
      </ColorPicker>
      
    </Container>
  );
}

export default BackgroundTab;
