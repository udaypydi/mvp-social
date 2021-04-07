import React, { useContext, useState } from 'react';
import { Input, Select, Segment } from 'semantic-ui-react';
import Slider from 'react-rangeslider';
import { SketchPicker } from 'react-color';
import { H4, H6 } from 'src/commons/text';
import Container from 'src/commons/container';
import { IMAGE_BORDER_RADIUS_STYLES } from './imageBorder.constant';
import { EmitterContext } from '../../../../index';


function ImageBorder({ targetElement, title }) {
    const [showManualInput, setShowManualInput] = useState(false);
    const [borderRadius, setBorderRadius] = useState(0);
    const [boxShadow, setBoxShadow] = useState({
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        hex: '#000000',
    });
    const [showColorPicker, setShowColorPicker] = useState(false);

    const emitter = useContext(EmitterContext);

    function handleBorderStyleChange(event, data) {
        const { value } = data;
        if (value === 'manual') {
            setShowManualInput(true);
            emitter.emit('borderRadiusChange', { 
                borderType: value, 
                elementId: targetElement.id,
                borderRadius: 0,
            });
        } else {
            setShowManualInput(false);
            emitter.emit('borderRadiusChange', { borderType: value, elementId: targetElement.id });
        }
    }

    function handleBorderRadiusChange(event) {
        const { value } = event.target;
        const regex = /^\d+$/;

        if (regex.test(value) && parseInt(value) <= 50) {
            setBorderRadius(value);
            emitter.emit('borderRadiusChange', { 
                borderType: value, 
                elementId: targetElement.id,
                borderRadius: value,
            });
        }
    }

    function handleBoxShdaowChange() {
        const { value, name } = event.target;
        const regex = /^\d+$/;

        if (regex.test(value) && parseInt(value) <= 100) {
            const newBoxShadow = { ...boxShadow };
            newBoxShadow[name] = value;
            setBoxShadow(newBoxShadow);
            emitter.emit('boxShadowChange', { elementId: targetElement.id, boxShadow: newBoxShadow });
        }
    }

    function setBoxShadowColor(color) {
        const { hex } = color;
        const newBoxShadow = { ...boxShadow };
        newBoxShadow.hex = hex;
        setBoxShadow(newBoxShadow);
        emitter.emit('boxShadowChange', { elementId: targetElement.id, boxShadow: newBoxShadow });
    }
    

    return (
        <Container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <H4>{ title || 'Image Border'}</H4>
            <Container justifyContent="flex-start" alignItems="center" margin="10px 0px 0px 0px">
                <label className="mr-2">Radius Type</label>
                <div style={{ width: 100 }}>
                    <Select 
                        placeholder="Select Border Radius"
                        options={IMAGE_BORDER_RADIUS_STYLES} 
                        onChange={handleBorderStyleChange}
                    />
                </div>    
            </Container>
            {
                showManualInput && (
                    <Container justifyContent="flex-start" alignItems="center" margin="10px 0px 0px 0px">
                        <label className="mr-2">Radius </label>
                        <>
                            <Input 
                                type="number"
                                value={borderRadius}
                                onChange={handleBorderRadiusChange}
                                style={{ width: '30%', marginLeft: '35px' }}
                            /><label className="ml-2">%</label>
                        </>    
                    </Container>  
                )
            }
            
            <Container 
                justifyContent="flex-start" 
                alignItems="flex-start" 
                margin="10px 0px 0px 0px"
                style={{ width: '100%' }}
            >
                <label className="mr-2">Box Shadow </label>
                <Segment style={{ display: 'flex', flexWrap: 'wrap', width: '74%', margin: 0}}>
                    <div 
                        style={{ display: 'flex', width: '50%', alignItems: 'center' }}
                        className="mt-2"
                    >
                        <label className="mr-2 text-xs">X</label>
                        <>
                            <Input 
                                name="x"
                                style={{ width: '50%' }}
                                value={boxShadow.x}
                                onChange={handleBoxShdaowChange}
                            />
                            <label className="ml-2 text-xs">px</label>
                        </>
                    </div>   
                    <div 
                        className="mt-2"
                        style={{ display: 'flex', width: '50%', alignItems: 'center' }}
                    >
                        <label className="mr-6 text-xs">Blur</label>
                        <>
                            <Input
                                name="blur"
                                style={{ width: '50%' }}
                                value={boxShadow.blur}
                                onChange={handleBoxShdaowChange}
                            />
                            <label className="ml-2 text-xs">px</label>
                        </>
                    </div>   
                    <div 
                        className="mt-5"
                        style={{ display: 'flex', width: '50%', alignItems: 'center' }}
                    >
                        <label className="mr-2 text-xs">Y</label>
                        <>
                            <Input 
                                name="y"
                                style={{ width: '50%' }}
                                value={boxShadow.y}
                                onChange={handleBoxShdaowChange}
                            />
                            <label className="ml-2 text-xs">px</label>
                        </>
                    </div>  
                    <div 
                        className="mt-5"
                        style={{ display: 'flex', width: '50%', alignItems: 'center' }}
                    >
                        <label className="mr-2 text-xs">Spread</label>
                        <>
                            <Input 
                                name="spread"
                                style={{ width: '50%' }} 
                                value={boxShadow.spread}
                                onChange={handleBoxShdaowChange}
                            />
                            <label className="ml-2 text-xs">px</label>
                        </>
                    </div>  
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label className="text-xs">Box Shadow Color</label>
                        <div 
                            onClick={() => {
                                setShowColorPicker(!showColorPicker);
                            }}
                            style={{ 
                                height: 30, 
                                width: 30, 
                                backgroundColor: boxShadow.hex, 
                                margin: 10 
                            }} 
                        />
                    </div>   
                    {
                       showColorPicker && (
                           <SketchPicker 
                                style={{ marginTop: 10 }}
                                onChange={setBoxShadowColor}
                                color={boxShadow.hex}
                            />
                       ) 
                    } 
                </Segment>  
            </Container>

        </Container>
    );
}

export default ImageBorder;
