import React from 'react';
import Button from './Button';
import Loading from './Loading';
import SpotifyOverview from './SpotifyOverview';
import RecentSongs from './RecentSongs';
import styles from '../styles/components/VibeCheck.module.scss';

const VibeCheck = ({ vibe, timeframe, changeTimeframe }) => {
  return (
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
        <div className={styles['tab-content']}>
          {vibe ? (
            <>
              <SpotifyOverview vibe={vibe} />
              <RecentSongs vibe={vibe} timeframe={timeframe} />
            </>
          ) : (
            <Loading message="Detecting your vibe" />
          )}
        </div>
      </div>
    </>
  );
};

export default VibeCheck;