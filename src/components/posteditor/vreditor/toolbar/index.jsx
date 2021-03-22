import React, { useState } from 'react';
import { TOOLBAR } from './toolbar.constants';
import { H4 } from 'src/commons/text';
import Container from 'src/commons/container';
import SkyGallery from '../skygallery';
import ThreeDObjects from '../objects';
import theme from 'src/theme';

const { colors } = theme;

function Toolbar({ handleImageClick, activeImage }) {
    const [activeTab, setActiveTab] = useState('SKY');

    return (
        <Container 
            background={colors.containerBackground} 
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Container margin="0px">
                {
                    TOOLBAR.map(toolbar => (
                        <Container 
                            margin="0px" 
                            padding="10px"
                            cursor="pointer"
                            color={toolbar.key === activeTab ? colors.infoColor : '#000000'}
                            onClick={() => setActiveTab(toolbar.key)}
                        >
                            <H4 fontWeight={toolbar.key === activeTab ? 500 : 300}>{toolbar.name}</H4>
                        </Container>
                    ))
                }
            </Container>
            {
                activeTab === 'SKY' && (
                    <SkyGallery 
                        handleImageClick={handleImageClick}
                        activeImage={activeImage}
                    />
                )
            }
            {
                activeTab === 'OBJECTS' && (
                    <ThreeDObjects />
                )
            }
        </Container>
    );
}

export default Toolbar;
