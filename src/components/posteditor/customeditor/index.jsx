import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { nanoid } from 'nanoid';
import mitt from 'mitt';
import { SAMPLE_TEMPLATE } from './constants';
import { addElement } from './frame/utils';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Frame from './frame';
import { EditorContainer } from './components.styles';
import EditorSidebar from './sidebar';

export const emitter = mitt();

export const EmitterContext = React.createContext(emitter);

function CustomEditor(props) {
    const [draggedElement, setDraggedElement] = useState(null);

    function handleDrag(element) {
      addElement(SAMPLE_TEMPLATE, element);
      setDraggedElement(element);
    }
    
    return (
      <DndProvider backend={HTML5Backend}>  
        <EmitterContext.Provider value={emitter}>
            <EditorContainer>  
                <EditorSidebar handleDragEnd={handleDrag} emitter={emitter} />
                <Frame draggedElement={{ ...draggedElement, id: nanoid() }} emitter={emitter} /> 
            </EditorContainer>
        </EmitterContext.Provider>    
      </DndProvider>
    );
}

export default CustomEditor;
