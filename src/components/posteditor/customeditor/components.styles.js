import styled from '@emotion/styled';
import { Segment } from 'semantic-ui-react';

export const EditorContainer = styled.div`
    position: relative;
    height:  100vh;
    width: 100vw !important;
    margin: 0px !important;
`;

export const EditorFrame = styled(Segment)`
    width: 50vw;
    height: 50vh;
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    z-index: 10;
    padding: 0px !important;
`;

export const Iframe = styled.iframe`
    width: 50vw;
    height: 50vh;
    margin: 0;
`;

