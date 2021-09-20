import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Feature.module.scss';

const Feature = ({ name, value }) => (
  <article className={`df df-fc df-ai-c df-jc-c ${styles.feature}`}>
    <p className={styles['feature-emphasis']}>{value}</p>
    <p className={styles['feature-name']}>{name}</p>
  </article>
);

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Feature;
