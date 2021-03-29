import styled from '@emotion/styled';
import theme from 'src/theme';

const { colors } = theme;

export const PropertyContainer = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const ImageUploadContainer = styled.div`
    width: ${props => props.width || '60%'};
    height: ${props => props.height || '100px'};
    border-radius: 5px;
    border: 1px solid ${colors.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin || 'auto'};
    flex-direction: column;
`
