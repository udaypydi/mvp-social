import React, { useState, useContext, useEffect } from 'react';
import { Segment, Input, Select } from 'semantic-ui-react';
import { SketchPicker } from 'react-color';
import { H4, H6 } from 'src/commons/text';
import Container from 'src/commons/container';
import { EmitterContext } from '../../../../index';

function FontStyle({ targetElement }) {

    const [fontSize, setFontSize] = useState(0);
    const [fontColor, setFontColor] = useState('#000000');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
    const [fontFamilies, setFontFamilies] = useState([]);

    const emitter = useContext(EmitterContext);

    useEffect(() => {
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD9-Y4_AIY0B9PA-PauTxBS3nHnrpUbwMg&sort=alpha')
        .then(res => res.json())
        .then(json => {
            const { items } = json;
            const newArray = [];
            items.filter(item => {
                if (item.category === 'sans-serif') {
                    newArray.push({
                        key: item.family,
                        value: item.family,
                        text: item.family,
                    });
                }
            });
            setFontFamilies(newArray);
        });

    }, []);

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

    function handleBackgroundColorChange(color) {
        const { hex } = color;
        emitter.emit('backgroundColorChange', { elementId: targetElement.id, color: hex });
        setBackgroundColor(hex);
    }

    function handleFontFamilyChange(event, data) {
        const { value } = data;
        emitter.emit('fontFamilyChange', { elementId: targetElement.id, fontFamily: value });
    }


    return (
        <Container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <H4>Font Style</H4>
            <Segment className="w-full">
                <Container direction="column" justifyContent="flex-start" margin="0">
                    <div className="mr-5 w-full flex items-center justify-between mt-2 relative">
                        <label className="ml-2">Font Family</label>
                        <Select 
                            placeholder="Select Font" 
                            options={fontFamilies}
                            style={{ width: 100 }} 
                            onChange={handleFontFamilyChange}
                        />  
                    </div>    
                </Container>
                <Container direction="column" justifyContent="flex-start" margin="0">
                    <div className="mr-5 w-full flex items-center justify-between mt-5">
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
                                    margin: 10,
                                    border: '1px solid #ccc'
                                }} 
                            />
                            <div className="absolute" style={{ left: '25%', zIndex: 99999 }}>
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
                <Container direction="column" justifyContent="flex-start" margin="0">
                    <div className="mr-5 w-full flex items-center justify-between mt-2 relative">
                        <label className="ml-2">Background</label>
                        <div>
                            <div 
                                onClick={() => {
                                    setShowBackgroundColorPicker(!showBackgroundColorPicker);
                                }}
                                style={{ 
                                    height: 30, 
                                    width: 30, 
                                    backgroundColor: backgroundColor, 
                                    margin: 10,
                                    border: '1px solid #ccc'
                                }} 
                            />
                            <div className="absolute" style={{ left: '25%', zIndex: 99999 }}>
                                {
                                    showBackgroundColorPicker && (
                                        <SketchPicker 
                                            style={{ marginTop: 10 }}
                                            onChange={handleBackgroundColorChange}
                                            color={backgroundColor}
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
