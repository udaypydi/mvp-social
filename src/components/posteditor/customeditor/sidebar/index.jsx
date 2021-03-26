import React from 'react';
import { EditorSidebar, EditorElementsContainer } from './styles';
import Element from './element';
import { ELEMENTS } from './constants';

function EditorComponents({ handleDragEnd }) {
    return (
        <>
            <EditorSidebar raised>
                <EditorElementsContainer>
                    {
                        ELEMENTS.map((element) => <Element element={element} handleDragEnd={handleDragEnd} />)
                    }
                </EditorElementsContainer>    
            </EditorSidebar>
        </>
    )
}

export default EditorComponents;
