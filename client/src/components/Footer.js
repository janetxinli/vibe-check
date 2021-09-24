import React from 'react';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Created by
      <a
        href="https://www.github.com/janetxinli"
        target="_blank"
        rel="noreferrer noopener"
      >
        {' Janet Li'}
      </a>
    </p>
  </footer>
);

export default Footer;
