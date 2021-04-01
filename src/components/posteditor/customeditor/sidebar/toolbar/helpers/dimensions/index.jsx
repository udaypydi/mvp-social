import React, { useContext, useState, useEffect } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { H4, H6 } from 'src/commons/text';
import Container from 'src/commons/container';
import { EmitterContext } from '../../../../index';

function ElementDimensions({ targetElement }) {
    const [elementDimension, setElementDimension] = useState({
        width: 0,
        height: 0,
    });


    useEffect(() => {
        if (targetElement) {
            parseDimensionsFromElement(targetElement);
        }
    }, [targetElement])

    const emitter = useContext(EmitterContext);

    emitter.on('elementResized', (event) => {
        parseDimensionsFromElement(event.element);
    });


    function parseDimensionsFromElement(element) {
        const { height, width } = window.getComputedStyle(element);
        const computedHeight = parseInt(height.split('px')[0]);
        const computedWidth = parseInt(width.split('px')[0]);
        setElementDimension({
            height: computedHeight,
            width: computedWidth,
        });
    }


    function handleDimensionsChange(event) {
        const { value, name } = event.target;
        const newDims = { ...elementDimension };
        newDims[name] = parseInt(value || 0);
        emitter.emit('dimensionsChange', { elementId: targetElement.id, dimensions: newDims });
        setElementDimension(newDims);
    }


    return (
        <Container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <H4>Dimensions</H4>
            <Segment className="w-full">
                <Container direction="row" justifyContent="flex-start" margin="0">
                    <div className="mr-5">
                        <label className="mr-2">Width</label>
                        <Input 
                            value={elementDimension.width}
                            name="width"
                            onChange={handleDimensionsChange}
                            style={{ width: 65 }} 
                        />
                        <label className="ml-2">px</label>
                    </div>
                    <div>
                        <label className="mr-2">Height</label>
                        <Input 
                            value={elementDimension.height}
                            name="height"
                            onChange={handleDimensionsChange}
                            style={{ width: 65 }}
                        />
                        <label className="ml-2">px</label>
                    </div> 
                </Container>
            </Segment>
        </Container>
    );
}

export default ElementDimensions;
