import { combineReducers } from 'redux'
import playlists from './playlists'
import ui from './ui'

export default combineReducers({
  playlists,
  ui
})
