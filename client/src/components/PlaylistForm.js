import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';
import Alert from './Alert';
import styles from '../styles/components/PlaylistForm.module.scss';

const PlaylistForm = ({
  showForm,
  toggleShowForm,
  tracks,
  mood,
  timeframe,
}) => {
  const context = useContext(GlobalContext);

  const [playlistName, setPlaylistName] = useState(`${mood} vibes`);
  const [newPlaylistURL, setNewPlaylistURL] = useState(null);
  const [error, setError] = useState(null);

  const createPlaylist = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/api/save-playlist`,
        {
          tracks,
          name: playlistName,
        },
        {
          headers: {
            Authorization: `Bearer ${context.accessToken}`,
          },
        }
      );
      toggleShowForm();
      setNewPlaylistURL(res.data.url);
    } catch (err) {
      setError({
        message:
          'Whoops, something went wrong saving your playlist. Please try again.',
        type: 'error',
      });
    }
  };

  const handleToggleFormClick = (e) => {
    e.preventDefault();
    setError(null);
    toggleShowForm();
  };

  let songList;
  if (timeframe === 'recent') {
    songList = 'recent';
  } else {
    songList = 'top';
  }

  return (
    <div className={`df df-fc df-ai-c ${styles['new-playlist']}`}>
      {showForm ? (
        <form className="container df df-fc df-ai-c">
          <h3 className={styles['new-playlist-header']}>
            Create a playlist with your {songList} tunes
          </h3>
          {error !== null ? (
            <Alert type={error.type} message={error.message} />
          ) : null}

          <input
            id="new-playlist-title"
            type="text"
            placeholder="Name"
            value={playlistName}
            onChange={({ target }) => setPlaylistName(target.value)}
          />
          <div className={`df ${styles['form-btns']}`}>
            <Button
              primary
              label="Save Playlist"
              handleClick={createPlaylist}
            />
            <Button
              secondary
              label="Cancel"
              handleClick={handleToggleFormClick}
            />
          </div>
        </form>
      ) : null}
      {newPlaylistURL === null ? (
        !showForm && (
          <Button
            secondary
            label="Save Songs to a Playlist"
            handleClick={handleToggleFormClick}
            className={styles['create-btn']}
          />
        )
      ) : (
        <Alert type="success" message={`${playlistName} saved!`}>
          <a
            href={newPlaylistURL}
            target="_blank"
            rel="noreferrer noopener"
            className="df df-ai-c"
          >
            <p className={styles.listen}>Listen on Spotify</p>
            <OpenInNewIcon />
          </a>
        </Alert>
      )}
    </div>
  );
};

PlaylistForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  toggleShowForm: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.string).isRequired,
  mood: PropTypes.string.isRequired,
  timeframe: PropTypes.oneOf(['recent', 'lastMonth', 'allTime']).isRequired,
};

export default PlaylistForm;
