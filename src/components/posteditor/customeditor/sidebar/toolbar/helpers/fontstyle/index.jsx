import React, { useState, useContext } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { SketchPicker } from 'react-color';
import { H4, H6 } from 'src/commons/text';
import Container from 'src/commons/container';
import { EmitterContext } from '../../../../index';

function FontStyle({ targetElement }) {

    const [fontSize, setFontSize] = useState(0);
    const [fontColor, setFontColor] = useState('#000000');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const emitter = useContext(EmitterContext);

    function handleFontSizeChange(event) {
        const { value } = event.target;
        emitter.emit('fontSizeChange', { elementId: targetElement.id, fontSize: value });
        setFontSize(value);
    }

    function handleFontColorChange(color) {
        const { hex } = color;
        emitter.emit('fontColorChange', { elementId: targetElement.id, color: hex });
        setFontColor(hex);
    }

    return (
        <Container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <H4>Font Style</H4>
            <Segment className="w-full">
                <Container direction="column" justifyContent="flex-start" margin="0">
                    <div className="mr-5 w-full flex items-center justify-between">
                        <label className="ml-2">Font Size</label>
                        <div>
                            <Input
                                style={{ width: 100 }} 
                                onChange={handleFontSizeChange}
                                value={fontSize}
                            />
                            <label className="ml-2">px</label>
                        </div>    
                    </div>    
                </Container>
                <Container direction="column" justifyContent="flex-start" margin="0">
                    <div className="mr-5 w-full flex items-center justify-between mt-5 relative">
                        <label className="ml-2">Font Color</label>
                        <div>
                            <div 
                                onClick={() => {
                                    setShowColorPicker(!showColorPicker);
                                }}
                                style={{ 
                                    height: 30, 
                                    width: 30, 
                                    backgroundColor: fontColor, 
                                    margin: 10 
                                }} 
                            />
                            <div className="absolute" style={{ left: '25%' }}>
                                {
                                    showColorPicker && (
                                        <SketchPicker 
                                                style={{ marginTop: 10 }}
                                                onChange={handleFontColorChange}
                                                color={fontColor}
                                            />
                                    ) 
                                } 
                            </div>
                        </div>    
                    </div>    
                </Container>
            </Segment>
        </Container>    
    );
}

export default FontStyle;
