import { call, put, takeEvery } from 'redux-saga/effects'
import { getPlaylists, getPlaylist, getUser, createPlaylist, editPlaylist, addTracks, removeTracks } from '../utiles/spotifyAPI';

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
    }
 }

 function* fetchPlaylist(action) {
   try {
      const current = yield call(getPlaylist, action.payload.access_token, action.payload.id);
      console.log(current)
      yield put({type: "setCurrent", payload: current});
      yield put({type: "setTracks", payload: current.tracks.items});

   } catch (e) {
   
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

   }
}

function* fetchEditPlaylist(action) {
   try {
      yield call(editPlaylist, action.payload.access_token, action.payload.id, action.payload.submitData);
      const playlists = yield call(getPlaylists, action.payload.access_token);
      yield put({type: "setPlaylists", payload: playlists});
      const current = yield call(getPlaylist, action.payload.access_token, action.payload.id);
      yield put({type: "setCurrent", payload: current});
      yield put({type: "setTracks", payload: current.tracks.items});
   } catch (e) {

   }
}

function* fetchAddTrack(action) {
   try {
      yield call(addTracks, action.payload.access_token, action.payload.id, action.payload.trackURI);
      const current = yield call(getPlaylist, action.payload.access_token, action.payload.id);
      yield put({type: "setCurrent", payload: current});
      yield put({type: "setTracks", payload: current.tracks.items});
   } catch (e) {
      
   }
}

function* fetchRemoveTrack(action) {
   try {
      yield call(removeTracks, action.payload.access_token, action.payload.id, action.payload.trackURI);
      const current = yield call(getPlaylist, action.payload.access_token, action.payload.id);
      yield put({type: "setCurrent", payload: current});
      yield put({type: "setTracks", payload: current.tracks.items});
   } catch (e) {

   }
}

 function* spotifySaga() {
    yield takeEvery("PLAYLISTS_FETCH_REQUESTED", fetchData);
    yield takeEvery("PLAYLIST_FETCH_REQUESTED", fetchPlaylist);
    yield takeEvery("CREATE_FETCH_REQUESTED", fetchCreatePlaylist);
    yield takeEvery("EDIT_FETCH_REQUESTED", fetchEditPlaylist);
    yield takeEvery("ADD_FETCH_REQUESTED", fetchAddTrack);
    yield takeEvery("REMOVE_FETCH_REQUESTED", fetchRemoveTrack);
  }

  export default spotifySaga;