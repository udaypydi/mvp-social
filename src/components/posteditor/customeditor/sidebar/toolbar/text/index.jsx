import React from 'react';
import { Divider } from 'semantic-ui-react';
import TextDimension from '../helpers/dimensions';
import FontStyle from '../helpers/fontstyle';
import TextEdit from '../helpers/textedit';

function TextToolbar({ targetElement }) {
    return (
        <div>
            <TextDimension targetElement={targetElement} />
            <Divider />
            <FontStyle targetElement={targetElement} />
            <Divider />
            <TextEdit targetElement={targetElement} />
        </div>
    )
}

export default TextToolbar;
