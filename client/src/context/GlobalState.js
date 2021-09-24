import React, { useEffect, createContext, useReducer } from 'react';
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

  // actions
  const add = (authInfo) => {
    dispatch({
      type: 'ADD_TOKEN',
      payload: authInfo,
    });
  };

  const refresh = (updateInfo) => {
    dispatch({
      type: 'REFRESH_TOKEN',
      payload: updateInfo,
    });
  };

  const remove = () => {
    dispatch({
      type: 'DELETE_TOKEN',
    });
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      loggedInUser.expires = new Date(Number(loggedInUser.expires)).getTime();
      add(loggedInUser);
    }
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
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
