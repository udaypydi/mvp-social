import React, { useState } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { MdCropSquare, MdImage, MdButt } from 'react-icons/md';
import PropTypes from 'prop-types';
import { addElementsToCanvas } from './helpers/addElements';
import Image from '../image/';


const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 20px;
    text-align: center;
`;


function AddElements(props) {
  const [activeElement, setActiveElement] = useState('');
  const [elements, setElements] = useState({});

  const { addElement, canvasRef } = props;


  function toggleActiveElements(key) {
    const element = addElementsToCanvas(key, canvasRef);
    const newElems = { ...elements };
    newElems[key] = element;
    setElements(newElems);
    setActiveElement(key)
  }

  return (
    <>
      {
        activeElement ? (
          <Container>
            {
              activeElement === 'IMAGE' && (
                <Image 
                  imageRef={elements.IMAGE}
                  canvasRef={canvasRef}
                />
              )
            }
          </Container>
        ) : (
          <Container>
            <Container 
              direction="column"
              onClick={() => {
                toggleActiveElements('CONTAINER')
              }}
            >
              <MdCropSquare size="3rem" style={{ fontWeight: 'normal' }} />
              <p>Container</p>
            </Container>
            <Container
              direction="column"
              onClick={() => {
                toggleActiveElements('IMAGE');
              }}
            >
              <MdImage size="3rem" style={{ fontWeight: 'normal' }} />
              <p>Image</p>
            </Container>
          </Container>
        )
      }
      
    </>  
  );
}

AddElements.propTypes = {
  addElement: PropTypes.func,
};

AddElements.defaultProps = {
  addElement: null,
};

export default AddElements;
