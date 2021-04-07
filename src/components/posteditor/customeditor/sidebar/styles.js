
import styled from '@emotion/styled';
import { Segment, Icon } from 'semantic-ui-react';
import theme from 'src/theme';

const { colors } = theme;

export const EditorSidebar = styled(Segment)`
    height: 100vh;
    width: 20vw;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0px !important;
    overflow: auto;
`;

export const EditorElementsContainer = styled.div`
    width: 20vw;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 15px;
`;

export const ElementContainer = styled(Segment)`
    width: 8vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px !important;
    cursor: move;
    color: ${colors.primaryColor};
`;

export const ElementIcon = styled(Icon)`
    font-size: 35px !important;
`;