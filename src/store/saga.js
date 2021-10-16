import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getPlaylists, getPlaylist, getUser, createPlaylist } from '../utiles/spotifyAPI';



function* fetchData(action) {
    try {
       const playlists = yield call(getPlaylists, action.payload);
       yield put({type: "setPlaylists", payload: playlists});
       const current = yield call(getPlaylist, action.payload, playlists[0].id);
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
      const current = yield call(getPlaylist, action.payload.access_token, action.payload.id);
      console.log(current)
      yield put({type: "setCurrent", payload: current});
      yield put({type: "setTracks", payload: current.tracks.items});

   } catch (e) {
      yield put({type: "getPlaylistsFailed", message: e.message});
   }
}

function* fetchCreatePlaylist(action) {
   try {
      yield call(createPlaylist, action.payload.access_token, action.payload.userId, action.payload.submitData);
      const playlists = yield call(getPlaylists, action.payload.access_token);
      yield put({type: "setPlaylists", payload: playlists});
      const current = yield call(getPlaylist, action.payload.access_token, playlists[0].id);
      yield put({type: "setCurrent", payload: current});
      yield put({type: "setTracks", payload: current.tracks.items});
   } catch (e) {
      yield put({type: "getPlaylistsFailed", message: e.message});
   }
}


 function* mySaga() {
    yield takeEvery("PLAYLISTS_FETCH_REQUESTED", fetchData);
    yield takeEvery("PLAYLIST_FETCH_REQUESTED", fetchPlaylist);
    yield takeEvery("CREATE_FETCH_REQUESTED", fetchCreatePlaylist);
  }

  export default mySaga;