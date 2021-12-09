import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { loginUrl } from '../services';
import { GlobalContext } from '../context/GlobalState';
import Button from '../components/Button';
import styles from '../styles/pages/Index.module.scss';

export default function Home() {
  const context = useContext(GlobalContext);
  const router = useRouter();

  const checkMood = (e) => {
    e.preventDefault();
    router.push('/your-vibe');
  };

  const logout = (e) => {
    e.preventDefault();
    context.remove();
  };

  return (
    <>
      <Head>
        <title>vibe check</title>
        <meta name="robots" content="index, nofollow" />
        <meta
          name="description"
          content="Determine your vibe from your Spotify listening history"
        />
      </Head>

      <section className="vertical-center-parent">
        <article className={`df df-fc df-ai-c df-jc-c ${styles.welcome}`}>
          <h2>Detect your vibe from your listening history.</h2>
          <p>
            The music that you listen to influences how you&apos;re feeling.
            This app determines your mood from your recent and top Spotify
            tunes.
          </p>

          {context.accessToken !== null ? (
            <div
              className={`df df-fc df-jc-c ${styles['welcome-btn-container']}`}
            >
              <Button
                label="Check Yourself"
                handleClick={checkMood}
                primary
                className={`${styles['welcome-btn']} ${styles['btn-mood']}`}
              />
              <Button
                label="Log Out"
                handleClick={logout}
                secondary
                className={`${styles['welcome-btn']} ${styles['btn-logout']}`}
              />
            </div>
          ) : (
            <div
              className={`df df-fc df-jc-c ${styles['welcome-btn-container']}`}
            >
              <a
                className={`df df-ai-c df-jc-c btn btn-primary ${styles['btn-login']} `}
                href={loginUrl}
              >
                Log in With Spotify
                <img
                  className={`${styles['welcome-btn']} ${styles['btn-login-logo']}`}
                  src="/spotifyLogo.svg"
                  alt="spotify logo"
                />
              </a>
            </div>
          )}
        </article>
      </section>
    </>
  );
}
