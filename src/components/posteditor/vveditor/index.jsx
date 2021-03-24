import React, { useEffect } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import webpage from 'grapesjs-preset-webpage';
import grapesjs from 'grapesjs';
import Container from 'src/commons/container';

import './editor.scss';

function VVEditor(props) {


    useEffect(() => {
        const editor = grapesjs.init({
            // Indicate where to init the editor. You can also pass an HTMLElement
            container: '#gjs',
            // Get the content for the canvas directly from the element
            // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
            fromElement: true,
            // Size of the editor
            height: '80vh',
            width: '80vw',
            // Disable the storage manager for the moment
            storageManager: false,
            // Avoid any default panel
            panels: {},
            plugins: [webpage]

        });

    }, []);


    return (
        <div style={{ width: '90vw', height: '100vh', marginTop: 120, marginLeft: 20 }}>
                <div class="panel__top">
                    <div class="panel__basic-actions"></div>
                    <div class="panel__devices"></div>
                    <div class="panel__switcher"></div>
                </div>
                <div class="editor-row">
                <div class="editor-canvas">
                    <div id="gjs">
                        <p>Editor</p>
                    </div>
                </div>
                <div class="panel__right">
                    <div class="layers-container"></div>
                    <div class="styles-container"></div>
                    <div class="traits-container"></div>
                </div>
                </div>
                <div id="blocks"></div>
        </div>
    );
}

export default VVEditor;
