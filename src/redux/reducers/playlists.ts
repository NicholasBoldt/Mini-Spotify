export type playlistState = {
  access_token: string;
  playlists: any[];
  current: any;
  tracks: any[];
  userId: string;
};

const initialState: playlistState = {
  access_token: "",
  playlists: [],
  current: {},
  tracks: [],
  userId: "",
};

const playlistReducer = (state = initialState, action: any) => {
  if (action.type === "setPlaylists") {
    return {
      ...state,
      playlists: action.payload,
    };
  }
  if (action.type === "setCurrent") {
    return {
      ...state,
      current: action.payload,
    };
  }
  if (action.type === "setTracks") {
    return {
      ...state,
      ...state,
      tracks: action.payload,
    };
  }
  if (action.type === "setUserId") {
    return {
      ...state,
      userId: action.payload,
    };
  }
  if (action.type === "setAccessToken") {
    return {
      ...state,
      access_token: action.payload,
    };
  }

  return state;
};

export default playlistReducer;
