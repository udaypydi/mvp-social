import React from 'react';
import { Divider } from 'semantic-ui-react';
import ButtonDimension from '../helpers/dimensions';
import FontStyle from '../helpers/fontstyle';
import ButtonBorder from '../helpers/imageBorder';
import TextEdit from '../helpers/textedit';

function ButtonToolbar({ targetElement }) {
    return (
        <div>
            <ButtonDimension targetElement={targetElement} />
            <Divider />
            <FontStyle targetElement={targetElement} />
            <Divider />
            <ButtonBorder 
                targetElement={targetElement}
                title="Border"
            />
            <Divider />
            <TextEdit targetElement={targetElement} />
            <Divider />
        </div>
    )
}

export default ButtonToolbar;
