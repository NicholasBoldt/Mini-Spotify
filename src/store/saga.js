import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getPlaylists, getPlaylist, getUser } from '../utiles/spotifyAPI';



function* fetchData(action) {
    try {
       const playlists = yield call(getPlaylists, action.payload);
       console.log(playlists)
       yield put({type: "setPlaylists", payload: playlists});
       const current = yield call(getPlaylist, action.payload, playlists[0].id);
       console.log(current)
       yield put({type: "setCurrent", payload: current});
       yield put({type: "setTracks", payload: current.tracks.items});
       const user = yield call(getUser, action.payload);
       yield put({type: "setUserId", payload: user.id});

    } catch (e) {
       yield put({type: "getPlaylistsFailed", message: e.message});
    }
 }

 function* fetchPlaylist(action) {
   try {
      const current = yield call(getPlaylist, action.payload.access_code, action.payload.id);
      console.log(current)
      yield put({type: "setCurrent", payload: current});
      yield put({type: "setTracks", payload: current.tracks.items});

   } catch (e) {
      yield put({type: "getPlaylistsFailed", message: e.message});
   }
}


 function* mySaga() {
    yield takeEvery("PLAYLISTS_FETCH_REQUESTED", fetchData);
    yield takeEvery("PLAYLIST_FETCH_REQUESTED", fetchPlaylist);
  }

  export default mySaga;