import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/pages/404.module.scss';

export default function Custom404Page() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Not Found | vibe check</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section>
        <article
          className={`df df-fc df-ai-c ${styles['error-page']} vertical-center-parent`}
        >
          <h2>404</h2>
          <p>Oops, the page you&apos;re looking for doesn&apos;t exist.</p>
          <Button
            primary
            label="Return to Home"
            handleClick={() => router.push('/')}
          />
        </article>
      </section>
    </>
  );
}
