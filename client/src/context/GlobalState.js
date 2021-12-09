import React, { useEffect, createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import AppReducer from './AppReducer';

const initialState = {
  accessToken: null,
  refreshToken: null,
  expires: null,
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [loading, setLoading] = useState(true);

  // actions
  const add = (authInfo) => {
    dispatch({
      type: 'ADD_TOKEN',
      payload: authInfo,
    });

    localStorage.setItem('loggedInUser', JSON.stringify(authInfo));
  };

  const refresh = (updateInfo) => {
    dispatch({
      type: 'REFRESH_TOKEN',
      payload: updateInfo,
    });

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        ...state,
        accessToken: updateInfo.accessToken,
        expires: updateInfo.expires,
      })
    );
  };

  const remove = () => {
    dispatch({
      type: 'DELETE_TOKEN',
    });

    localStorage.removeItem('loggedInUser');
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      loggedInUser.expires = new Date(Number(loggedInUser.expires)).getTime();
      add(loggedInUser);
    }

    setLoading(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        add,
        refresh,
        remove,
      }}
    >
      {!loading && children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
