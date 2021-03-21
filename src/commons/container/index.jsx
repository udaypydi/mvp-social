import styled from '@emotion/styled';

const Container = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: ${(props) => props.direction || 'row'};
    flex-wrap: wrap;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    margin: ${props => props.margin || '20px'};
    text-align: ${props => props.textAlign || 'center'};
`;

export default Container;
