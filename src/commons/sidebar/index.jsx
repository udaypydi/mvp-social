import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Divider from 'src/commons/divider';
import { Paragraph } from 'src/commons/text';
import sideBarStyles from './sidebar.styles';
import { SIDEBAR_ELEMENTS } from './sidebar.constants';

function SideBar(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const { pathname } = props.history.location;
    if (pathname.indexOf('manage-accounts') !== -1) {
      setActiveIndex(3);
    } else if(pathname.indexOf('dashboard') !== -1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(0);
    }
  }, []);

  function setElementActive(index) {
    setActiveIndex(index);
    props.history.push(SIDEBAR_ELEMENTS[index].route);
  }

  function renderSideBarChildren() {
    return SIDEBAR_ELEMENTS.map((element, index) => (
      <div
        css={css`${sideBarStyles.navigationItem} ${index === activeIndex ? sideBarStyles.active : ''}`}
        onClick={() => setElementActive(index)}
      >
        <div css={sideBarStyles.iconContainer}><element.icon color={index === activeIndex ? '#ffffff' : '#a9afbb'} /></div>
        <Paragraph css={sideBarStyles.navigationElementText}>{element.title}</Paragraph>
      </div>

    ));
  }

  return (
    <div css={sideBarStyles.container}>

      <div css={sideBarStyles.logo}>
        <Paragraph css={sideBarStyles.logoText}>Castmypost</Paragraph>
        <Divider />
      </div>
      <div css={sideBarStyles.sidebarWrapper}>
        <div css={sideBarStyles.navigationBar}>
          {renderSideBarChildren()}
        </div>
      </div>
    </div>
  );
}

export default withRouter(SideBar);
