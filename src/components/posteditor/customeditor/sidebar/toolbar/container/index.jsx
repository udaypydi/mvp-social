import React from 'react';
import { Divider } from 'semantic-ui-react';
import ContainerDimension from '../helpers/dimensions';
import FontStyle from '../helpers/fontstyle';

function QuotationToolbar({ targetElement }) {
    return (
        <div>
            <ContainerDimension targetElement={targetElement} />
            <Divider />
            <FontStyle targetElement={targetElement} />
            <Divider />
        </div>
    );
}

export default QuotationToolbar;
