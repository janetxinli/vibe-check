import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label,
  handleClick,
  primary,
  secondary,
  text,
  className,
}) => {
  let classes = 'btn';

  if (text) {
    classes += ' btn-text';
  }

  if (secondary) {
    classes += ' btn-secondary';
  }

  // primary styling takes precedence over others
  if (primary) {
    classes += ' btn-primary';
  }

  // add custom styles
  if (className !== undefined) {
    classes += ` ${className}`;
  }

  return (
    <button type="submit" className={classes} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  text: false,
  className: undefined,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
