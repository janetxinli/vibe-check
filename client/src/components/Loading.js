import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Loading.module.scss';

const Loading = ({ message }) => (
  <article className={`df df-fc df-ai-c df-jc-c ${styles.loading}`}>
    <img
      src="/vinylRecord.png"
      alt="spinning vinyl record"
      className={styles.record}
    />
    <p>{message}</p>
  </article>
);

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Loading;
