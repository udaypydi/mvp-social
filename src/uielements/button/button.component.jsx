import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    buttonText,
    primary,
    className,
    onClick,
  } = props;
  let btnClass = '';

  if (primary) {
    btnClass = 'bg-transparent hover:bg-blue-500 text-indigo-100 font-semibold hover:text-white py-2 px-4 border border-indigo-100 hover:border-transparent rounded';
  }
  return (
    <button
      type="button"
      className={`${btnClass} ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

/**
 * Prop Validation
 */

Button.propTypes = {
  /**
   * @buttonText: Text of a button.
   */

  buttonText: PropTypes.string.isRequired,

  /**
   * @primary: Enable primary button.
   */

  primary: PropTypes.bool,

  /**
   * @className: add class to customize button
   */
  className: PropTypes.string,

  /**
   * @onClick: add click event listener to button.
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  className: '',
  onClick: () => null,
};


export default Button;
