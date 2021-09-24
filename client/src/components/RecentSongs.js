import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import Song from './Song';
import styles from '../styles/components/RecentSongs.module.scss';

const RecentSongs = ({ vibe, timeframe }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
  };

  let songsToShow;
  let arrow;

  if (showAll) {
    songsToShow = vibe.songs;
    arrow = (
      <ArrowUpwardRoundedIcon className={styles.arrow} fontSize="large" />
    );
  } else {
    songsToShow = vibe.songs.slice(0, 3);
    arrow = (
      <ArrowDownwardRoundedIcon className={styles.arrow} fontSize="large" />
    );
  }

  let title;
  if (timeframe === 'recent') {
    title = 'Recent Tunes';
  } else {
    title = 'Top Tunes';
  }

  return (
    <section className={styles['recent-songs']}>
      <div className={`df df-ai-c df-jc-sb ${styles['recent-songs-header']}`}>
        <h3>{title}</h3>
        <div
          className={styles['arrow-up']}
          onClick={songsToShow === null ? null : toggleShowAll}
          onKeyDown={songsToShow === null ? null : toggleShowAll}
          role="button"
          aria-label={showAll ? 'see less' : 'see more'}
          tabIndex="-1"
        >
          {arrow}
        </div>
      </div>
      {songsToShow.map((s) => (
        <Song key={s.uuid} songInfo={s} />
      ))}
    </section>
  );
};

RecentSongs.propTypes = {
  vibe: PropTypes.object.isRequired,
  timeframe: PropTypes.oneOf(['recent', 'lastMonth', 'allTime']).isRequired,
};

export default RecentSongs;
