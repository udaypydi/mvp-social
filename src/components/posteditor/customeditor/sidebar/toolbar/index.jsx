import React from 'react';
import { ToolbarHeader, CustomIcon, Title } from './styles';

import ImageToolbar from './image';
import TextToolbar from './text';
import ButtonToolbar from './button';
import QuotationToolbar from './quote';
import ContainerToolbar from './container';

function Toolbar({ targetElement, onBack, activeElement }) {

    function renderToolbars() {
        switch (targetElement.key) {
            case 'IMAGE':
                return (
                    <ImageToolbar 
                        targetElement={targetElement} 
                        activeElement={activeElement}
                    />
                );
            
            case 'TEXT':
                return (
                    <TextToolbar targetElement={activeElement} />
                );

            case 'BUTTON':
                return (
                    <ButtonToolbar targetElement={activeElement} />
                );

            
            case 'CONTAINER':
                return (
                    <ContainerToolbar targetElement={activeElement} />
                );

            default:
                break;
        }
    }

    return (
        <div>
            <ToolbarHeader>
                <CustomIcon name="arrow left" onClick={() => onBack(null)} />
                <Title>{targetElement.name}</Title>
            </ToolbarHeader>
            {targetElement && renderToolbars()}
        </div>
    );
}

export default Toolbar;
