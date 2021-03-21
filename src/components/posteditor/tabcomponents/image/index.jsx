import React, { useState } from 'react';
import Slider from 'src/commons/slider';
import Container from 'src/commons/container';
import { H4, H6 } from 'src/commons/text';
import { updateImageDimensions, updateImageURL } from '../elements/helpers/updateElement';

function Image({ canvasRef, imageRef }) {
    const [width, setWidth] = useState(0);

    return (
        <div>
            <Container display="flex" justifyContent="space-between" style={{ width: 300 }}>
                <H4>Width</H4>
                <Slider
                    min={0}
                    max={100}
                    value={width}
                    onChange={(val) => {
                        setWidth(val);
                    }}
                    onChangeComplete={() => {
                        updateImageDimensions(canvasRef, imageRef, { width, height: width });
                    }}
                    width="70%"
                />
                <H6>{width} px</H6>
            </Container>
            <Container display="flex" justifyContent="space-between" style={{ width: 300 }}>
                <H4>URL</H4>
                <input 
                    style={{ width: 200, border: '1px solid #ccc' }}
                    placeholder="Enter Image URL"
                    type="text"
                    onChange={(e) => {
                        updateImageURL(canvasRef, imageRef, e.target.value);
                    }}
                />
            </Container>
        </div>        
    );
}

export default Image;
