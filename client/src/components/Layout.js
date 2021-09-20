import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children }) => (
  <div className={`df df-fc ${styles.content}`}>
    <Header />
    <main className={`container ${styles.main}`}>{children}</main>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
