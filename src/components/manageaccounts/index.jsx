import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Paragraph } from 'src/commons/text';
import { FaPlus } from 'react-icons/fa';
import { BasicCard } from 'src/commons/card';
import Modal from 'src/commons/modal';
import { ACCOUNTS_LIST } from './manageaccounts.constant';

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
  const [showAccountsModal, setShowAccountsModal] = useState(false);

  handleSocialAccountSelect = (account) => {
    const { api } = account;
  };

  function renderModalBody() {
    return (
      <Container
          justify="space-evenly"
          align="flex-start"
          height="100%"
          flexDirection="row"
        >
        {
          ACCOUNTS_LIST.map(account => (
            <account.icon fontSize="100px" onClick={() => handleSocialAccountSelect(account)} />
          ))
        }
      </Container>
    );
  }

  return (
    <React.Fragment>
        <Container
          justify="flex-start"
          align="flex-start"
          height="100%"
          flexDirection="row"
        >
          <div
            className="text-center"
            id="custom_card"
            onClick={() => setShowAccountsModal(true)}
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
        <Modal
          title="Add Accounts"
          showModal={showAccountsModal}
          onModalToggle={setShowAccountsModal}
          showActionButtons={false}
          modalBody={renderModalBody()}
          modalType="large"
        />
    </React.Fragment>
  );
}

export default ManageAccount;
