import { Modal, Button } from 'semantic-ui-react';
import styled from '@emotion/styled';
import theme from 'src/theme';

const { colors } = theme;

export const CustomModal = styled(Modal)`
    width: 60%;
    height: 30%;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-dirction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'center'};
    width: ${props => props.width || '100%'};
    height: 100%;
    padding: ${props => props.padding};
`;

export const CustomButton = styled(Button)`
    background-color: ${colors.primaryColor} !important;
    color: white !important;
    width: ${props => props.width || '150px'};
`;