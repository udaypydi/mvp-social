import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { PropertyContainer, ImageUploadContainer } from './styles';
import { H4, CustomIcon } from 'src/commons/text';
import theme from 'src/theme';
import ImageUploadModal from './helpers/uploadmodal';

const { colors } = theme;

function ImageToolbar(props) {
    const [showImageUploadModal, setShowImageUploadModal] = useState(false);

    return (
        <div>
            <ImageUploadContainer onClick={() => setShowImageUploadModal(true)}>
                <CustomIcon 
                    fontSize="50px" 
                    name="upload" 
                    style={{ marginTop: 10 }}
                />
                <H4>Upload Image</H4>
            </ImageUploadContainer>
            {
                showImageUploadModal && (
                    <ImageUploadModal onModalClose={() => setShowImageUploadModal(false)} />
                )
            }
        </div>
    )
}

export default ImageToolbar;
