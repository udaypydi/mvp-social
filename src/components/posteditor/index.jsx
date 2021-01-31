
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import Button from 'src/uielements/button/button.component';
// import 'grapesjs/dist/css/grapes.min.css';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
// import grapesjs from 'grapesjs';
import './index.scss';

const { colors } = theme;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-direction: column;
`;


const CustomButton = styled(Button)`
    background: ${colors.primaryColor} !important;
    color: #ffffff;
    &:hover {
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(65,126,235,.4);
    }

    &:focus {
        outline: none;
    }
`;


function PostEditor(props) {
  
  const [postURL, setPostURL] = useState('');

  let editor;
  const myTheme = {
  'downloadButton.backgroundColor': `${colors.primaryColor}`,
  'downloadButton.border': `1px solid ${colors.primaryColor}`,
  'downloadButton.color': '#fff',
  'downloadButton.fontFamily': 'NotoSans, sans-serif',
  'downloadButton.fontSize': '12px',
  'downloadButton.content': 'Share'
  };
  const editorRef = React.createRef();

  useEffect(() => {
    const editorRootElement = editorRef.current.rootEl.current;
    editorRootElement.getElementsByClassName('tui-image-editor-header-logo')[0].style.display = 'none';
    const actionButton = editorRootElement.querySelector('.tui-image-editor-download-btn');
    actionButton.value = 'Share';
    actionButton.innerText = 'Share';

    actionButton.onClick = (event) => {
      event.preventDefault();
      window.alert('hello');
    };
  }, []);

  return (
    <Container>     
      <ImageEditor
        ref={editorRef}
        includeUI={{
          loadImage: {
            path: 'img/sampleImage.jpg',
            name: 'SampleImage'
          },
          theme: myTheme,
          menu: ['shape', 'filter', 'crop'],
          initMenu: 'crop',
          uiSize: {
            width: '1000px',
            height: '600px'
          },
          menuBarPosition: 'bottom'
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70
        }}
        usageStatistics={false}
      />
       {/* <CustomButton 
        onClick={() => {
          const imageURL = editorRef.current.getInstance().toDataURL();
          setPostURL(imageURL);
        }}
        buttonText="Share"
      />
      <img src={postURL} height="100" width="100" /> */}
    </Container>
  );
}


export default PostEditor;
