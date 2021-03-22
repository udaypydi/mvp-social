import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene } from 'aframe-react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './toolbar';
import theme from 'src/theme';
import { THREE_DIMENSIONAL_MODELS } from './vrEditor.constants';

const { colors } = theme;


const AbsoluteContainer = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 9999;
    padding: 5px;
    background-color: ${colors.containerBackground};
    margin: 10px;
    border-radius: 5px;
    width: 50%;
    height: 20%;
    -webkit-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.75);
`;

function VRScene(props) {

    const [skyURL, setSkyURL] = useState('https://res.cloudinary.com/dgvup74b7/image/upload/v1616412694/d759b559ad669f9e199f1aaaa381a8ab_xyijpq.jpg');

    return (
        <>
            <Scene>
                <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                <Entity 
                    primitive="a-sky" 
                    src={skyURL} 
                    rotation="0 -130 0"
                />
            </Scene>
             <AbsoluteContainer>
                <Toolbar 
                    handleImageClick={setSkyURL}
                    activeImage={skyURL}
                />
            </AbsoluteContainer>
        </>
    );
}
 

 export default VRScene;
