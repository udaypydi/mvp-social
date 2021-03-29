import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import mitt from 'mitt';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Frame from './frame';
import { EditorContainer } from './components.styles';
import EditorSidebar from './sidebar';

export const emitter = mitt();

export const EmitterContext = React.createContext(emitter);

function CustomEditor(props) {
    const [draggedElement, setDraggedElement] = useState(null);

    return (
      <DndProvider backend={HTML5Backend}>  
        <EmitterContext.Provider value={emitter}>
            <EditorContainer>  
                <EditorSidebar handleDragEnd={setDraggedElement} emitter={emitter} />
                <Frame draggedElement={draggedElement} emitter={emitter} /> 
            </EditorContainer>
        </EmitterContext.Provider>    
      </DndProvider>
    );
}

export default CustomEditor;
