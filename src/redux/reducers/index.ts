import { combineReducers } from "redux";
import playlists, { playlistState } from "./playlists";
import ui, { uiState } from "./ui";

export default combineReducers({
  playlists,
  ui,
});

export type rootState = {
  ui: uiState;
  playlists: playlistState;
};
