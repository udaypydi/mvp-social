import styled from '@emotion/styled';
import { Segment, Icon } from 'semantic-ui-react';
import theme from 'src/theme';

const { colors } = theme;

export const CustomIcon = styled(Icon)`
    cursor: pointer;
    font-size: 25px !important;
    color: ${colors.primaryColor};
`;
