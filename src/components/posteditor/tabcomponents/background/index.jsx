import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { CirclePicker as ColorPicker, SketchPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
import { H3 } from 'src/commons/text';
import theme from 'src/theme';

const { colors } = theme;


const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    flex-wrap: wrap;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    margin: auto;
    margin-top: ${props => props.marginTop || '20px'};
`;

const ColorInput = styled(EditableInput)`
  border: 1px solid #ccc !important;
  padding: 5px;
  border-radius: 5px;
`;

function BackgroundTab({ canvasRef }) {
  const [background, setBackground] = useState({ hex: '#fffff' });

  function setCanvasBackgroundColor(color) {
    const { hex } = color;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setBackground(color);
  }

  return (
    <Container
      flexDirection="column"
    >
      <H3 color={colors.primaryColor}>Default Colors</H3>
      <Container marginTop="30px">
        <ColorPicker
          onChangeComplete={setCanvasBackgroundColor}
          circleSize={30}
        />
      </Container>   
      <Container
        flexDirection="column"
      >
        <H3 color={colors.primaryColor}>Customize Colors</H3>
        <Container marginTop="30px">
          <SketchPicker 
            style={{
              border: '1px solid #ccc'
            }}
            onChange={setCanvasBackgroundColor}
            color={background}
          />
        </Container>  
      </Container>
    </Container>
  );
}

export default BackgroundTab;
