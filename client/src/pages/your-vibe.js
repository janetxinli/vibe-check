import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getRefreshedToken, getSongs } from '../services';
import { GlobalContext } from '../context/GlobalState';
import PlaylistForm from '../components/PlaylistForm';
import VibeCheck from '../components/VibeCheck';
import ErrorReturnHome from '../components/ErrorReturnHome';
import styles from '../styles/pages/YourVibe.module.scss';

export default function YourVibe() {
  const context = useContext(GlobalContext);
  const router = useRouter();

  const [vibe, setVibe] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('recent');

  // user is not logged in, redirect to home page
  useEffect(() => {
    if (!context.accessToken) {
      router.push('/');
    }
  }, []);

  useEffect(async () => {
    if (context.accessToken !== null) {
      // user is logged in
      if (new Date().getTime() >= context.expires) {
        // access token has expired; get refreshed token
        try {
          const refreshed = await getRefreshedToken(context.refreshToken);
          context.refresh(refreshed.data);

          const res = await getSongs(timeframe, refreshed.data.accessToken);

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
        try {
          const res = await getSongs(timeframe, context.accessToken);
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

  return (
    <>
      <Head>
        <title>Your Vibe | vibe check</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {showForm ? <div className={styles.overlay} /> : null}

      {error === null ? (
        <>
          <VibeCheck
            vibe={vibe}
            timeframe={timeframe}
            changeTimeframe={changeTimeframe}
          />
          {vibe !== null && (
            <PlaylistForm
              showForm={showForm}
              toggleShowForm={toggleShowForm}
              tracks={vibe.songs.map((s) => s.id)}
              mood={vibe.overview.mood}
              timeframe={timeframe}
            />
          )}
        </>
      ) : (
        <ErrorReturnHome type={error.type} message={error.message} />
      )}
    </>
  );
}
