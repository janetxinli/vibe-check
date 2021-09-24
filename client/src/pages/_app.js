import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { GlobalProvider } from '../context/GlobalState';
import '../styles/common/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
