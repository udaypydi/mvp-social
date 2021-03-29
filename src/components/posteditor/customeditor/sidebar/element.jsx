import React from 'react';
import { useDrag } from 'react-dnd';
import { nanoid } from 'nanoid';
import { ElementContainer, ElementIcon } from './styles';
import { H4 } from 'src/commons/text';

function Element({ element, handleDragEnd, addElement }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ELEMENT',
        item: { ...element },
        end: (item, monitor) => {
            console.log(item);
            handleDragEnd(item);
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div ref={drag} key={nanoid()} onClick={() => handleDragEnd(element)}>
            <ElementContainer>
                <ElementIcon 
                    name={element.icon}
                />
                <H4>{element.name}</H4>
            </ElementContainer>
        </div> 
    )
}

export default Element;
