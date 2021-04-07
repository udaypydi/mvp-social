import React, { useState, useEffect, useContext } from 'react';
import { Segment, TextArea } from 'semantic-ui-react';
import Container from 'src/commons/container';
import { H4, H6 } from 'src/commons/text';
import { EmitterContext } from '../../../../index';

function TextEdit({ targetElement }) {

    const [text, setText] = useState('');
    const emitter = useContext(EmitterContext);

    useEffect(() => {
        setText(targetElement?.innerText);
    }, [targetElement]);

    function handleTextChange(event) {
        const { value } = event.target;
        emitter.emit('textChange', { elementId: targetElement.id, text: value });
        setText(value);
    }
    return (
        <Container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <H4>Text</H4>
            <Segment className="w-full">
                <TextArea 
                    value={text}
                    onChange={handleTextChange}
                    placeholder='Tell us more' 
                    rows={5}
                    style={{ width: '100%', border: '1px solid #ccc', padding: 5 }}
                />
            </Segment>
        </Container>    
    );
}

export default TextEdit;
