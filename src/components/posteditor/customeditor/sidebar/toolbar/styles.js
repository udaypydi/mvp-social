import { Segment, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import { H3 } from 'src/commons/text';

const { colors } = theme;

export const ToolbarHeader = styled(Segment)`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const CustomIcon = styled(Icon)`
    font-size: 20px;
    color: ${colors.primaryColor};
    cursor: pointer;
`;

export const Title = styled(H3)`
    margin-left: 50%;
    transform: translateX(-50%);
`;




