import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import { Paragraph } from 'src/commons/text';
import { FaPlus, FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { BasicCard } from 'src/commons/card';
import Modal from 'src/commons/modal';
import { ACCOUNTS_LIST } from './manageaccounts.constant';

const { colors } = theme;

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    padding: 1%;
    flex-direction: ${(props) => props.flexDirection || 'column'};
    height: ${(props) => props.height || 'auto'}
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Image = styled.img`
  height: 50;
  width: 50px;
  border-radius: 50%;
`;

function ManageAccount(props) {
  const [showAccountsModal, setShowAccountsModal] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch('/api/get-accounts')
      .then(res => res.json())
      .then(json => {
        setAccounts(json);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSocialAccountSelect = (account) => {
    const { api } = account;
    fetch(`/api${api}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
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
            <a href={account.api}>
              <account.icon fontSize="100px" />
            </a>
            
          ))
        }
      </Container>
    );
  }

  function getIconType(type) {
    return (
      <IconContainer>
        {
          type === 'facebook' && (
            <FaFacebookSquare 
              color={colors.facebookColor}
              fontSize="25px"
            />
          )
        }
        {
          type === 'twitter' && (
            <FaTwitterSquare 
              color={colors.twitterColor}
              fontSize="25px"
            />
          )
        }
        {
          type === 'linkedin' && (
            <FaLinkedin 
              color={colors.linkedinColorCode}
              fontSize="25px"
            />
          )
        }
      </IconContainer>
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
          {
            accounts.map(account => (
              <div
                className="text-center"
              >
                <BasicCard
                  width="150px"
                  height="150px"
                  flexDirection="column"
                  background="#ffffff"
                  margin="10px"
                >
                  <Image src={account.profilePhoto} />
                  <Paragraph
                    weight={600}
                    fontSize="1rem"
                  >
                    {account.name}
                  </Paragraph>
                  {getIconType(account.accountType)}
                  
                </BasicCard>
                
              </div> 
            ))
          }
          <div
            className="text-center"
            id="custom_card"
            onClick={() => setShowAccountsModal(true)}
          >
            <BasicCard
              width="150px"
              height="150px"
              margin="10px"
              flexDirection="column"
            >
              <FaPlus
                size="3em"
                style={{
                  fontWeight: 100,
                }}
              />
              <Paragraph
                weight={600}
                fontSize="1rem"
              >
                Add Account
              </Paragraph>
            </BasicCard>
           
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
