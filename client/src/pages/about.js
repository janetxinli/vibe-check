import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/About.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>About | vibe check</title>
        <meta name="robots" content="index, nofollow" />
        <meta
          name="description"
          content="About Vibe Check. This app analyzes your Spotify listening history and 
          determines your mood from the features of your recent and top tunes."
        />
      </Head>
      <article className={styles.about}>
        <h2>About</h2>
        <p>
          vibe check is a full stack web app built with Next.js and Express.js.
          <br />
          <br />
          This app uses Spotify&apos;s Web API to get your recently listened to
          and top tracks. This requires you to log in with your Spotify account
          and provide permission to access your account data via the User
          Authorization Code Flow.
        </p>
        <h3>What data is accessed?</h3>
        <p>
          When you log in with your Spotify account, you give this app access to
          your recently played and top played tracks, and the ability to create
          and modify your public playlists. In practice, vibe check will only
          create a new public playlist with a set of songs if you ask us to.
          <br />
          <br />
          Read more about Spotify&apos;s privacy policy{' '}
          <a
            target="_blank"
            href="https://www.spotify.com/ca-en/legal/privacy-policy/"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <h3>How is my mood determined?</h3>
        <p>
          Your mood is determined from the average valence and energy of your
          recent or top tunes by a (n extremely simplified) version of the{' '}
          <a
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2367156/"
            rel="noopener noreferrer"
          >
            Circumplex Model of Affect
          </a>
          .
          <br />
          <br />
          Of course, human emotions don&apos;t live on a 2-dimensional plane,
          but hopefully vibe check allows you to take a few seconds to reflect
          on how you&apos;re feeling.
        </p>
        <h3>Source Code</h3>
        <p>
          Check out the source code for the frontend (what you&apos;re seeing){' '}
          <a target="_blank" href="https://github.com/janetxinli/vibe-check-frontend" rel="noopener noreferrer">
            here
          </a>
          , and the backend{' '}
          <a target="_blank" href="https://github.com/janetxinli/vibe-check-backend" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
      </article>
    </>
  );
}
