const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        expires: action.payload.expires,
      };
    case 'REFRESH_TOKEN':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        expires: action.payload.expires,
      };
    case 'DELETE_TOKEN':
      return {
        accessToken: null,
        refreshToken: null,
        expires: null,
      };
    default:
      return state;
  }
};

export default AppReducer;
