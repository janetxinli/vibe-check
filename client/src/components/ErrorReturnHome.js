import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Alert from './Alert';
import Button from './Button';

const ErrorReturnHome = ({ type, message }) => {
  const router = useRouter();

  return (
    <Alert message={message} type={type}>
      <Button
        text
        label="Return to Home"
        handleClick={() => router.push('/')}
      />
    </Alert>
  );
};

ErrorReturnHome.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorReturnHome;
