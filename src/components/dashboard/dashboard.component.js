import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'commons/button/defaultbutton.component';
import { H3 } from 'commons/text/text.component';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import dashboardStyles from './dashboard.styles';

function Dashboard(props) {
  return (
    <div css={dashboardStyles.container}>
      <div>
        <img 
          style={{ height: 100 }}
          src="https://staticassets.gannettdigital.com/gci-static-assets/assets/global/static-web/device-icons@2x.png" 
        />
        <H3>No Accounts Found</H3>
        <Button onClick={() => props.history.push('/add-account')}>Get Started</Button>
      </div>
    </div>
  )
}

export default withRouter(Dashboard);
