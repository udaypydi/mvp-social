import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Card from 'commons/card/card.component';
import { Paragraph } from 'commons/text/text.component';
import { SOCIAL_ACCOUNTS } from './addaccount.constant';
import  styles from './addaccount.styles';

function AddAccount(props) {
    return (
        <div css={styles.container}>
            {
                SOCIAL_ACCOUNTS.map(account => (
                    <Card 
                        height='200px'
                        width='200px'
                        css={styles.card}
                    >
                        <account.icon fontSize='100px' />
                        <Paragraph>{account.name}</Paragraph>
                    </Card>
                ))
            }
            
        </div>
    );
}

export default AddAccount;
