
import theme from 'src/theme';

const { colors } = theme;

export const SAMPLE_TEMPLATE=`
    <html>
        <head>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    height: 100vh;
                    width: 100vw;
                }

                .editor-active-element {
                    border: 1px dashed ${colors.primaryColor} !important;
                }
            </style>
        </head>
        <body id="editor-body">
        </body>
    </html>
`;