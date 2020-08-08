import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const EditorCard = styled.div`
    height: ${(props) => props.height || '40%'};
    width: ${(props) => props.width || '40%'};
    background: #ffffff;
    -webkit-box-shadow: -15px -10px 33px -22px rgba(0,0,0,0.31);
    -moz-box-shadow: -15px -10px 33px -22px rgba(0,0,0,0.31);
    box-shadow: -15px -10px 33px -22px rgba(0,0,0,0.31);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: ${(props) => props.marginLeft || '0'};
`;


function EditorPreview({ template, isSidebarOpen }) {

    const editorRef = React.createRef(null);

    useEffect(() => {
        const frameElement = editorRef.current;
        frameElement.addEventListener('click', (event) => {
            console.log(event.target);
        });
    }, []);
    
    return (
        <EditorCard
            marginLeft={isSidebarOpen ? '10%' : 0}
        >
            <iframe 
                srcDoc={template}
                style={{ width: '100%', height: '100%' }}
                id="cmp-editor"
                ref={editorRef}
            />
      </EditorCard>
    );
}

EditorPreview.propTypes = {
    template: PropTypes.string,
    isSidebarOpen: PropTypes.bool.isRequired,
};

EditorPreview.defaultProps = {
    template: '',
};

export default EditorPreview;
