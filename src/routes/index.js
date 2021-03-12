import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from 'src/theme';
import Header from 'src/commons/header/header.component';
import Sidebar from 'src/commons/sidebar';
import CreatePost from 'src/components/createpost';
import PostEditor from 'src/components/posteditor';
import ManageAccount from 'src/components/manageaccounts';
import App from 'src/app';

const { colors } = theme;

const RouterDiv = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const ComponentDiv = styled.div`
  margin: 0;
  padding: 0;
  margin-left: ${(props) => (props.fullWidth ? 0 : '260px')};
  width: ${(props) => (props.fullWidth ? '100%' : 'calc(100vw - 260px)')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.fullHeight ? '0px' : '50px'};
  background-color: ${colors.containerBackground}
`;

const DefaultLayout = ({ component: Component, common, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <RouterDiv>
        {
          common.header && (
            <Header
              changeHeaderColorOnScroll={false}
              headerColor={colors.primaryColor}
              headerColor="transparent"
              headerText={common.headerText}
              showHeaderElements
              isLoggedIn
            />
          )
        }
        {
          common.sidebar && (
            <Sidebar />
          )
        }
        <ComponentDiv fullWidth={!common.sidebar} fullHeight={!common.header}>
          <Component {...matchProps} />
        </ComponentDiv>
      </RouterDiv>

    )}
  />
);

function RoutesManager() {
  return (
    <Router>
      <Switch>
        <DefaultLayout path="/create-post" common={{ header: true, sidebar: true }} component={CreatePost} />
        <DefaultLayout path="/post-editor" common={{ header: false, sidebar: false }} component={PostEditor} />
        <DefaultLayout path="/manage-accounts" common={{ header: true, sidebar: true }} component={ManageAccount} />
        <DefaultLayout path="/dashboard" common={{ header: false, sidebar: true }} component={App} />
        <DefaultLayout path="/" common={{ header: false, sidebar: true }} component={App} />
      </Switch>
    </Router>
  );
}

export default RoutesManager;
