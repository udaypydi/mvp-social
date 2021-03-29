import React, { useEffect, useContext } from 'react';
import { Input, Select } from 'semantic-ui-react';
import { H4, H6 } from 'src/commons/text';
import Container from 'src/commons/container';
import { IMAGE_BORDER_RADIUS_STYLES } from './imageBorder.constant';
import { EmitterContext } from '../../../../../index';

function ImageBorder({ targetElement }) {

    const emitter = useContext(EmitterContext);

    function handleBorderStyleChange(event, data) {
        const { value } = data;
        emitter.emit('borderRadiusChange', { borderType: value, elementId: targetElement.id });
    }
    

    return (
        <Container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <H4>Image Border</H4>
            <Container justifyContent="flex-start" alignItems="center" margin="10px 0px 0px 10px">
                <H6 margin="0px 10px 0px 0px" >Border Radius Style</H6>
                <Select 
                    placeholder="Select Border Radius"
                    options={IMAGE_BORDER_RADIUS_STYLES} 
                    onChange={handleBorderStyleChange}
                />
            </Container>    
        </Container>
    );
}

export default ImageBorder;
