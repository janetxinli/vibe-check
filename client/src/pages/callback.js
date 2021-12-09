import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GlobalContext } from '../context/GlobalState';
import Loading from '../components/Loading';

export default function Home() {
  const router = useRouter();
  const { add } = useContext(GlobalContext);

  const authInfo = router.query;

  useEffect(() => {
    if (router.isReady) {
      // query object has been hydrated
      if (
        Object.keys(authInfo).length > 0 &&
        Object.prototype.hasOwnProperty.call(authInfo, 'accessToken') &&
        Object.prototype.hasOwnProperty.call(authInfo, 'expires')
      ) {
        // login info provided in query string
        add(authInfo);
        router.push('/your-vibe');
      } else {
        // login info not provided/present
        router.push('/404');
      }
    }
  }, [authInfo]);

  return (
    <>
      <Head>
        <title>Loading | vibe check</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Loading message="Analyzing your Spotify..." />
    </>
  );
}
