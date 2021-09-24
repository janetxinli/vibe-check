import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Song.module.scss';

const Song = ({ songInfo }) => {
  const artistsDisplay =
    songInfo.artists.length === 1
      ? songInfo.artists[0]
      : `${songInfo.artists
          .slice(0, songInfo.artists.length - 1)
          .join(', ')} & ${songInfo.artists[songInfo.artists.length - 1]}`;

  return (
    <a href={songInfo.url} target="_blank" rel="noreferrer noopener">
      <article className={`df df-ai-c ${styles.song}`}>
        <img
          src={songInfo.image.url}
          alt={`${songInfo.album} album cover`}
          className={styles.album}
        />
        <div className={styles['song-info']}>
          <p className={styles['song-info-title']}>{songInfo.name}</p>
          <p>{songInfo.album}</p>
          <p>
            {'by '}
            {artistsDisplay}
          </p>
        </div>
      </article>
    </a>
  );
};

Song.propTypes = {
  songInfo: PropTypes.object.isRequired,
};

export default Song;
