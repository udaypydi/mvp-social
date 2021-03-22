import React from 'react';
import Container from 'src/commons/container';
import { SKY_GALLERY } from './skyGallery.constants';
import theme from 'src/theme';

const { colors } = theme;

function SkyGallery({ handleImageClick, activeImage }) {
    return (
        <Container flexWrap="no-wrap" margin="0px">
            {
                SKY_GALLERY.map((image) => (
                    <Container 
                        style={{ 
                            width: 200, 
                            height: 100,
                            border: activeImage === image ? `1px solid ${colors.primaryColor}` : 'none',
                            margin: 0,
                            marginLeft: 10,
                        }}
                        onClick={() => handleImageClick(image)}
                    >
                        <img src={image} style={{ width: 200, height: 100}} />
                    </Container>
                ))
            }

        </Container>
    );
}

export default SkyGallery;
