import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState';
import SpotifyOverview from '../components/SpotifyOverview';
import RecentSongs from '../components/RecentSongs';
import PlaylistForm from '../components/PlaylistForm';
import Button from '../components/Button';
import Loading from '../components/Loading';
import ErrorReturnHome from '../components/ErrorReturnHome';
import styles from '../styles/pages/YourVibe.module.scss';

export default function YourVibe() {
  const context = useContext(GlobalContext);
  const router = useRouter();

  const [vibe, setVibe] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('recent');

  useEffect(async () => {
    if (context.accessToken !== null) {
      // user is logged in
      if (new Date().getTime() >= context.expires) {
        // access token has expired; get refreshed token
        try {
          const refreshed = await axios.get(
            `${process.env.BACKEND_URL}/api/refresh?refreshToken=${context.refreshToken}`
          );
          context.refresh(refreshed.data);
          localStorage.setItem(
            'loggedInUser',
            JSON.stringify({
              ...context,
              accessToken: refreshed.data.accessToken,
              expires: refreshed.data.expires,
            })
          );

          const config = {
            headers: {
              Authorization: `Bearer ${refreshed.data.accessToken}`,
            },
          };

          const res = await axios.get(
            `${process.env.BACKEND_URL}/api/vibe?timeframe=${timeframe}`,
            config
          );

          if (res.status === 204) {
            // no songs to show
            setError({
              message:
                'No songs found. Listen to some tunes without Spotify private session enabled and check again.',
              type: 'info',
            });
          } else {
            setVibe(res.data);
          }
          setError(null);
        } catch (err) {
          setError({
            message: 'Error connecting to server',
            type: 'error',
          });
        }
      } else {
        // just grab the song list
        const config = {
          headers: {
            Authorization: `Bearer ${context.accessToken}`,
          },
        };

        try {
          const res = await axios.get(
            `${process.env.BACKEND_URL}/api/vibe?timeframe=${timeframe}`,
            config
          );

          if (res.status === 204) {
            // no songs to show
            setError({
              message:
                'No songs found. Listen to some tunes without Spotify private session enabled and check again',
              type: 'info',
            });
          } else {
            setVibe(res.data);
            setError(null);
          }
        } catch (err) {
          setError({
            message: 'Error connecting to server',
            type: 'error',
          });
        }
      }
    } else if (!localStorage.getItem('loggedInUser')) {
      // user is not logged in
      // check local storage bc context needs to hydrate first
      router.push('/');
    }
  }, [context, timeframe]);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const changeTimeframe = (e, value) => {
    e.preventDefault();
    setVibe(null);
    setTimeframe(value);
  };

  let pageContent;

  if (vibe) {
    pageContent = (
      <>
        <SpotifyOverview vibe={vibe} />
        <RecentSongs vibe={vibe} timeframe={timeframe} />
        <PlaylistForm
          showForm={showForm}
          toggleShowForm={toggleShowForm}
          tracks={vibe.songs.map((s) => s.id)}
          mood={vibe.overview.mood}
          timeframe={timeframe}
        />
      </>
    );
  } else {
    pageContent = <Loading message="Detecting your vibe" />;
  }

  return (
    <>
      <Head>
        <title>Your Vibe | vibe check</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {showForm ? <div className={styles.overlay} /> : null}

      {error === null ? (
        <>
          <h2 className={styles.title}>Your Vibe</h2>
          <div className="df df-fc df-ai-fe">
            <nav
              className={`df df-ai-fe ${styles['tab-container']}`}
              aria-label="Select Timeframe"
            >
              <Button
                label="recent"
                handleClick={(e) => changeTimeframe(e, 'recent')}
                className={
                  timeframe === 'recent' ? styles['tab-current'] : styles.tab
                }
              />
              <Button
                label="last month"
                handleClick={(e) => changeTimeframe(e, 'lastMonth')}
                className={
                  timeframe === 'lastMonth' ? styles['tab-current'] : styles.tab
                }
              />
              <Button
                label="all time"
                handleClick={(e) => changeTimeframe(e, 'allTime')}
                className={
                  timeframe === 'allTime' ? styles['tab-current'] : styles.tab
                }
              />
            </nav>
            <div className={styles['tab-content']}>{pageContent}</div>
          </div>
        </>
      ) : (
        <ErrorReturnHome type={error.type} message={error.message} />
      )}
    </>
  );
}
