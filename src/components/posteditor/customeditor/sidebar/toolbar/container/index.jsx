import React from 'react';
import { Divider } from 'semantic-ui-react';
import ContainerDimension from '../helpers/dimensions';
import FontStyle from '../helpers/fontstyle';
import ContainerBorder from '../helpers/imageBorder';

function QuotationToolbar({ targetElement }) {
    return (
        <div>
            <ContainerDimension targetElement={targetElement} />
            <Divider />
            <FontStyle targetElement={targetElement} />
            <Divider />
            <ContainerBorder targetElement={targetElement} title="Container Border" />
            <Divider />
        </div>
    );
}

export default QuotationToolbar;
