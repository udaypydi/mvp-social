import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styles from './button.styles';

function Button(props) {
  return (
    <button 
      onClick={props.handleButtonClick}
      css={css`${styles.buttonContainer} ${props.buttonStyle}`}
    >
      {props.buttonText}
    </button>
  );
}

Button.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  buttonStyle: PropTypes.any,
  buttonText: PropTypes.string.isRequired,
}
export default Button;

