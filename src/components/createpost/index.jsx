import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { Paragraph } from 'src/commons/text';
import { FaPlus } from 'react-icons/fa';
import { BasicCard } from 'src/commons/card';
import { POST_TYPES } from './createPost.constants';

// styled div container

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    padding: 1%;
    flex-direction: ${(props) => props.flexDirection || 'column'};
    height: ${(props) => props.height || 'auto'}
`;

function CreatePost(props) {
  const { history } = props;

  return (
    <Container
      justify="flex-start"
      align="flex-start"
      height="100%"
      flexDirection="row"
    >
      <div
        className="text-center m-10"
        id="custom_card"
      >
        <BasicCard
          width="150px"
          height="150px"
          onClick={() => {
            history.push('/post-editor');
          }}
        >
          <FaPlus
            size="3em"
            style={{
              fontWeight: 100,
            }}
          />
        </BasicCard>
        <Paragraph
          weight={600}
          fontSize="1rem"
        >
          Custom Post
        </Paragraph>
      </div>
      {
        POST_TYPES.map(postType => (
          <div
            className="text-center m-10"
            id="custom_card"
          >
            <BasicCard
              width="150px"
              height="150px"
              onClick={() => {
                history.push(`/post-editor?editor=${postType.subRoute}`);
              }}
            >
              <img src={postType.image} height="130px" width="130px" />
            </BasicCard>
            <Paragraph
              weight={600}
              fontSize="1rem"
            >
              {postType.name}
            </Paragraph>
          </div>
        ))
      }
      
    </Container>
  );
}

export default withRouter(CreatePost);
