import React from 'react';
import styled from '@emotion/styled';
import { Paragraph } from 'src/commons/text';
import { FaPlus } from 'react-icons/fa';
import { BasicCard } from 'src/commons/card';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    padding: 1%;
    flex-direction: ${(props) => props.flexDirection || 'column'};
    height: ${(props) => props.height || 'auto'}
`;


function ManageAccount(props) {
  return (
    <Container
      justify="flex-start"
      align="flex-start"
      height="100%"
      flexDirection="row"
    >
       <div
        className="text-center"
        id="custom_card"
      >
        <BasicCard
          width="150px"
          height="150px"
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
          Add Account
        </Paragraph>
      </div>
    </Container>
  );
}

export default ManageAccount;
