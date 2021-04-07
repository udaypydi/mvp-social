import React, { useState, useEffect, useContext } from 'react';
import mitt from 'mitt'
import { EditorSidebar, EditorElementsContainer } from './styles';
import Element from './element';
import Toolbar from './toolbar';
import { EmitterContext } from '../index';

import { ELEMENTS, ELEMENTS_MAPPING } from './constants';


function EditorComponents({ handleDragEnd }) {
    const [selectedElement, setSelectedElement] = useState(null);
    const [targetElement, setTargetElement] = useState(null);

    const emitter = useContext(EmitterContext);
    
    emitter.on('elementClicked', (event) => {
        setTargetElement(event.element);
        setSelectedElement(ELEMENTS_MAPPING[event.element.tagName]);
    });

    emitter.on('elementDeleted', (event) => {
        setSelectedElement(null);
    });

    function updateSelectedElement(element) {
        setSelectedElement(element);
        handleDragEnd(element);
    }

    return (
        <>
            <EditorSidebar raised>
                {
                    selectedElement ? (
                        <Toolbar 
                            activeElement={targetElement}
                            targetElement={selectedElement} 
                            onBack={updateSelectedElement}
                        />
                    ) : (
                        <EditorElementsContainer>
                            {
                                ELEMENTS.map((element) => (
                                    <Element 
                                        element={element} 
                                        handleDragEnd={updateSelectedElement}
                                    />
                                ))
                            }
                        </EditorElementsContainer> 
                    )
                }
            </EditorSidebar>
        </>
    )
}

export default EditorComponents;
