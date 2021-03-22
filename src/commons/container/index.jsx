import styled from '@emotion/styled';

const Container = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: ${(props) => props.direction || 'row'};
    flex-wrap: ${props => props.flexWrap || 'wrap'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    margin: ${props => props.margin || '20px'};
    text-align: ${props => props.textAlign || 'center'};
    background: ${props => props.background};
    padding: ${props => props.padding};
    color: ${props => props.color || '#000000'};
    cursor: ${props => props.cursor};
`;

export default Container;
