import React, { useState, useContext } from 'react';
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
      />
    </Container>
  );
}

export default BackgroundTab;
