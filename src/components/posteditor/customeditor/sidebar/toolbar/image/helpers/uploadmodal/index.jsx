import React, { useState } from 'react';
import { H4, H3, CustomIcon } from 'src/commons/text';
import { Modal, Divider, Input } from 'semantic-ui-react';
import { CustomModal, ContentDiv, CustomButton } from './styles';
import { ImageUploadContainer } from '../../styles';

function ImageUploadModal({ onModalClose, targetElement }) {

    const [imageURL, setImageURL] = useState('');

    function changeImage() {
        targetElement.src = imageURL;
        onModalClose();
    } 

    return (
        <div>
            <CustomModal style={{ zIndex: 99999 }} open>
                <Modal.Header>
                    <ContentDiv justify="flex-start">
                        <CustomIcon  
                            fontSize="20px" 
                            name="arrow left"
                            onClick={onModalClose}
                        />
                        <H3 
                            style={{ 
                                margin: 0, 
                                marginLeft: '50%', 
                                transform: 'translateX(-50%)'
                            }}>Add Image</H3>
                    </ContentDiv>    
                </Modal.Header>
                <Modal.Content style={{ height: '100%' }}>
                    <ContentDiv>
                        <ImageUploadContainer height="200px" width="40%" margin="0px 0px 0px 30px">
                            <CustomIcon fontSize="50px" name="upload" />
                            <H4 style={{ marginTop: 10 }}>Upload Image</H4>
                        </ImageUploadContainer>
                        <Divider style={{ marginTop: 60 }} vertical>OR</Divider>
                        <ContentDiv 
                            width="50%" 
                            direction="column" 
                            justify="center" 
                            align="center"
                            padding="10px"
                        >
                            <ContentDiv>
                                <Input 
                                    placeholder="Enter URL" 
                                    onChange={event => {
                                        setImageURL(event.target.value);
                                    }} 
                                    style={{ width: '80%', marginRight: 10, marginLeft: 10 }} 
                                />
                                <CustomButton onClick={changeImage}>Add Image</CustomButton>
                            </ContentDiv>     
                        </ContentDiv>    
                    </ContentDiv>
                </Modal.Content>
            </CustomModal>
        </div>
    )
}

export default ImageUploadModal;
