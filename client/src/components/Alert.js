import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Alert.module.scss';

const Alert = ({ type, message, children }) => {
  let otherClasses;

  switch (type) {
    case 'success':
      otherClasses = styles.success;
      break;
    case 'info':
      otherClasses = styles.info;
      break;
    case 'error':
      otherClasses = styles.error;
      break;
    default:
      // shouldn't reach this point
      break;
  }

  return (
    <div className={`df df-fc df-ai-c df-jc-c ${styles.alert} ${otherClasses}`}>
      <img
        src={`/${type}.png`}
        alt={`${type}`}
        className={styles['alert-icon']}
      />
      <p className={styles.message}>{message}</p>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  type: 'info',
  children: undefined,
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'error']),
  message: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Alert;
