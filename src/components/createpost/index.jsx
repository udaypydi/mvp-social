import React from 'react';
import styled from '@emotion/styled';
import { FaPlus } from 'react-icons/fa';
import { BasicCard } from 'src/commons/card';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    padding: 1%;
    flex-direction: ${props => props.flexDirection || 'column'};
    height: ${props => props.height || 'auto'}
`;

function CreatePost(props) {
    return (
        <Container
            justify="flex-start"
            align="flex-start"
            height="100%"
            flexDirection="row"
        >
            <BasicCard 
                width="150px"
                height="150px"
            >
                <FaPlus 
                    size="3em" 
                    style={{ 
                        fontWeight: 100 
                    }} 
                />
            </BasicCard>
        </Container>
    )
}

export default CreatePost;
