import styled from '@emotion/styled';
import { colors } from 'theme';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: white;
    border: 1px solid #cccccc;
    &:hover{
        border: 1px solid ${colors.primaryColor};
    }
    cursor: pointer;
`;

export default Card;
