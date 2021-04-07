import React from 'react';
import { Divider } from 'semantic-ui-react';
import QuotationDimension from '../helpers/dimensions';
import FontStyle from '../helpers/fontstyle';
import TextEdit from '../helpers/textedit';

function QuotationToolbar({ targetElement }) {
    return (
        <div>
            <QuotationDimension targetElement={targetElement} />
            <Divider />
            <FontStyle targetElement={targetElement} />
            <Divider />
            <TextEdit targetElement={targetElement} />
            <Divider />
        </div>
    );
}

export default QuotationToolbar;
