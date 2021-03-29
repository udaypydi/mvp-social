import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import 'grapesjs/dist/css/grapes.min.css';
import webpage from 'grapesjs-preset-webpage';
import gjsForms from 'grapesjs-plugin-forms';
import tUIImageEditor from 'grapesjs-tui-image-editor';
import grapesjs from 'grapesjs';
import theme from 'src/theme';
import Container from 'src/commons/container';
import Button from 'src/uielements/button/button.component';


import './editor.scss';

const { colors } = theme;

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

function VVEditor(props) {

    const [editor, setEditor] = useState();

    useEffect(() => {
        const editorState = grapesjs.init({
            container: '#gjs',
            fromElement: true,
            storageManager: false,
            width: '80vw',
            panels: {
                defaults: [{
                id: 'layers',
                el: '.panel__right',
                // Make the panel resizable
                resizable: {
                    maxDim: 350,
                    minDim: 200,
                    tc: 0, // Top handler
                    cl: 1, // Left handler
                    cr: 0, // Right handler
                    bc: 0, // Bottom handler
                    // Being a flex child we need to change `flex-basis` property
                    // instead of the `width` (default)
                    keyWidth: 'flex-basis',
                },
                }]
            },
            pluginsOptions: {
                'grapesjs-tui-image-editor': {
                    config: {
                        includeUI: {
                            initMenu: 'filter',
                        },
                    },
                }
            },
            plugins: [webpage, gjsForms, tUIImageEditor]

        });

        setEditor(editorState);
    }, []);


    return (
        <>
            <div style={{ width: '90vw', height: '100vh', marginTop: 120, marginLeft: 20 }}>
                    <div class="panel__top">
                        <div class="panel__basic-actions"></div>
                        <div class="panel__devices"></div>
                        <div class="panel__switcher"></div>
                    </div>
                    <div class="editor-row">
                        <div class="editor-canvas">
                            <div id="gjs">
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
             {/* <CustomButton
                onClick={() => {
                    const styles = editor.getCss();
                    const html = editor.getHtml();

                    const template = `
                        <html>
                            <style>
                                ${styles}
                            </style>
                            <body>
                                ${html}
                            </body>
                        </html>
                    `
                    fetch('/api/download-image', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            html: template,
                        })
                    })
                        .then(res => res.json())
                        .then(json => {
                            console.log(json);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }}
                buttonText="Share!"
            /> */}
        </>    
    );
}

export default VVEditor;
