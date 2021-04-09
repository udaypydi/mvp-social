import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { EditorFrame, Iframe } from '../components.styles';
import { SAMPLE_TEMPLATE } from '../constants';
import { addElement, initEmitter } from './utils';

function Frame({ draggedElement, emitter }) {
    const [htmlDoc, setHtmlDoc] = useState(SAMPLE_TEMPLATE);

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'ELEMENT',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            isActive: monitor.canDrop() && monitor.isOver(),
        }),
    }));

    useEffect(() => {
        if (emitter) {
            initEmitter(emitter);
        }
    }, []);


    
    return (
        <EditorFrame raised>
            <div ref={drop}>
                <Iframe 
                    id="editor-frame"
                    frameBorder="0"
                    srcDoc={htmlDoc}
                />
            </div>    
        </EditorFrame>
    );
}

export default Frame;
