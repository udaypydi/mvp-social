import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { HEADER_ICONS } from './header.constant';
import { MutedText } from 'commons/text/text.component';
import styles from './header.styles';

function Header(props) {
  const [headerColor, setHeaderColor] = useState(props.headerColor);

  const { changeHeaderColorOnScroll } = props;

  const scrollEventHandler = event => {
    if (window.scrollY> 50 && window.scrollY < window.screen.availHeight) {
      setHeaderColor('rgba(80, 128, 195, 0.3)');
    } else if(window.scrollY > window.screen.availHeight) {
      setHeaderColor('rgb(73, 107, 184)');
    } else {
      setHeaderColor('transparent');
    }
  };

  useEffect(() => {
    if (changeHeaderColorOnScroll) {
      window.addEventListener('scroll', scrollEventHandler);
    }
    return () => {
      window.removeEventListener('scroll', scrollEventHandler)
    }
  });

  return (
    <div css={styles.headerContainer} style={{ backgroundColor: headerColor }}>
        <p css={styles.companyName}>castmypost</p>
        {props.showHeaderElements && !props.isLoggedIn  && (
           <div css={styles.headerElementsContainer}>
              <div css={styles.headerElement}>
                <p>SIGNUP</p>
              </div>
              <div css={styles.headerElement}>
                <p>LOGIN</p>
              </div>
           </div>
        )}
        {
          props.isLoggedIn && (
            <div css={styles.headerElementsContainer} className='flx-space-btwn'>
              <MutedText className='ml-10'>{props.headerText.toUpperCase()}</MutedText>
              <div className='flex-row'>
                {
                  HEADER_ICONS.map(header => (
                    <div className='mr-50'>
                      <header.icon color='#555555' fontSize='22px' />
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
    </div>
  );
}

Header.propTypes = {
  showHeaderElements: PropTypes.bool.isRequired,
  changeHeaderColorOnScroll: PropTypes.bool.isRequired,
  headerColor: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerColor: 'transparent',
  isLoggedIn: false,
  headerText: '',
}

export default Header;
