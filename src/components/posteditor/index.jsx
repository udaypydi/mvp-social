// import React, { useState, useEffect } from 'react';
// import styled from '@emotion/styled';
// import { useSpring, animated } from 'react-spring';
// import { TEMPLATE } from './templates';
// import Tabs from './tabs';
// import TabComponents from './tabcomponents';
// import EditorPreview from './editorpreview';


// import 'grapesjs/dist/css/grapes.min.css';
// import grapesjs from 'grapesjs';


// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;


// const AnimatedTabComponent = styled(animated(TabComponents))``;


// var html = '<br><br><a href="http://google.com">Link</a>';

// function PostEditor(props) {
//   const [selectedTab, setSelectedTab] = useState('TEMPLATES');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const springProps = useSpring({
//     from: { width: 0 },
//     to: { width: 200 },
//   });

//   useEffect(() => {
//     if (selectedTab) {
//       setIsSidebarOpen(true);
//     }
//   }, [selectedTab]);

//   useEffect(() => {
//     const editor = grapesjs.init({
//       // Indicate where to init the editor. You can also pass an HTMLElement
//       container: '#gjs',
//       // Get the content for the canvas directly from the element
//       // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
//       fromElement: true,
//       // Size of the editor
//       height: '300px',
//       width: 'auto',
//       // Disable the storage manager for the moment
//       storageManager: false,
//       // Avoid any default panel
//       panels: { defaults: [] },
//     });
//   }, []);

//   return (
//     <Container>
//       {/* <Tabs onTabChange={setSelectedTab}g />
//       {
//             isSidebarOpen && (
//             <AnimatedTabComponent
//               selectedTab={selectedTab}
//               style={{ springProps }}
//               onCloseSidebar={() => setIsSidebarOpen(false)}
//             />
//             )
//         }
//         <EditorPreview 
//             isSidebarOpen={isSidebarOpen}
//             template={TEMPLATE}
//         /> */}
        
//         <div id="gjs">
//           <p>Hello World!</p>
//         </div>
//     </Container>
//   );
// }

// export default PostEditor;

import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import './index.scss';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;


function PostEditor(props) {
  let editor;

  useEffect(() => {
    editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '300px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: { defaults: [] },
    });
  }, []);

  return (
    <Container>
      <div id="gjs">
        <p>Demo Editor</p>
      </div>
    </Container>
  );
}


export default PostEditor;
