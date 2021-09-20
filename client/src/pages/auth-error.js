import React from 'react';
import Head from 'next/head';
import ErrorReturnHome from '../components/ErrorReturnHome';

const AuthError = () => (
  <>
    <Head>
      <title>Error | vibe check</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <ErrorReturnHome type="error" message="Error reaching Spotify" />
  </>
);

export default AuthError;
