import React, { useState } from 'react';
import { Icon, Divider } from 'semantic-ui-react';
import { PropertyContainer, ImageUploadContainer } from './styles';
import { H4, CustomIcon } from 'src/commons/text';
import theme from 'src/theme';
import ImageUploadModal from './helpers/uploadmodal';
import ImageBorder from './helpers/imageBorder';

const { colors } = theme;

function ImageToolbar({ activeElement }) {
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
            <Divider section></Divider>
            <ImageBorder targetElement={activeElement} />
            <Divider section></Divider>
            {
                showImageUploadModal && (
                    <ImageUploadModal 
                        onModalClose={() => setShowImageUploadModal(false)} 
                        targetElement={activeElement}
                    />
                )
            }
        </div>
    )
}

export default ImageToolbar;
