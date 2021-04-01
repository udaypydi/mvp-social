import React, { useContext, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import Container from 'src/commons/container';
import { H4, H5 } from 'src/commons/text';
import { CustomIcon } from './styles';
import { EmitterContext } from '../../../../index';

function Arrange({ targetElement }) {
    const [arrangeState, setArrangeState] = useState('FORWARD');

    const emitter = useContext(EmitterContext);

    const handleArrange = (type) => {
        emitter.emit('elementArranged', { elementId: targetElement.id, eventType: type });
        setArrangeState(type);
    };

    return ( 
        <Container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <H4>Arrange</H4>
            <Segment style={{ width: '100%' }}>
                <Container justifyContent="space-between" alignItems="center">
                    <div onClick={() => handleArrange('FORWARD')}>
                        <CustomIcon name="window restore" />
                        <H5 color="#000000">Bring Front</H5>
                    </div>
                     <div onClick={() => handleArrange('BACKWARD')}>
                        <CustomIcon name="window restore outline" />
                        <H5 color="#000000">Send Back</H5>
                    </div>
                </Container>
            </Segment>
        </Container>    
    );
}

export default Arrange;
