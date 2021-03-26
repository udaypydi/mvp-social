import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Frame from './frame';
import { EditorContainer } from './components.styles';
import EditorSidebar from './sidebar';

function CustomEditor(props) {
    const [draggedElement, setDraggedElement] = useState(null);

    return (
      <DndProvider backend={HTML5Backend}>  
        <EditorContainer>  
            <EditorSidebar handleDragEnd={setDraggedElement} />
            <Frame draggedElement={draggedElement} /> 
        </EditorContainer>
      </DndProvider>
    );
}

export default CustomEditor;
