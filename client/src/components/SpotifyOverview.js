import React from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';
import styles from '../styles/components/SpotifyOverview.module.scss';

const SpotifyOverview = ({ vibe }) => {
  const round = (value) => Number.parseFloat(value).toFixed(2);

  return (
    <section className={`df df-fc df-ai-c df-jc-c ${styles.overview}`}>
      <article className={styles.mood}>
        <p className={styles['mood-intro']}>You&apos;ve been feeling...</p>
        <p className="emphasis">{vibe.overview.mood}</p>
      </article>

      <Feature
        name="energy"
        value={`${round(vibe.overview.features.energy * 100)}%`}
      />
      <Feature
        name="danceability"
        value={`${round(vibe.overview.features.danceability * 100)}%`}
      />
      <Feature
        name="tempo"
        value={`${round(vibe.overview.features.tempo)} bpm`}
      />
    </section>
  );
};

SpotifyOverview.propTypes = {
  vibe: PropTypes.object.isRequired,
};

export default SpotifyOverview;
