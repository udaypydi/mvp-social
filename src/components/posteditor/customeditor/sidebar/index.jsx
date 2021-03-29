import React, { useState } from 'react';
import { EditorSidebar, EditorElementsContainer } from './styles';
import Element from './element';
import Toolbar from './toolbar';

import { ELEMENTS } from './constants';

function EditorComponents({ handleDragEnd }) {
    const [selectedElement, setSelectedElement] = useState(null);

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
