import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mySaga from './saga'

const initialState: { access_code: string, playlists: any[], current: any, tracks: any[], userId: string} = { 
    access_code: '',
    playlists: [],
    current: {},
    tracks: [],
    userId: ''
};

const playlistReducer: any = (state = initialState, action: any) => {
    if(action.type === 'setPlaylists') {
        console.log(action.payload)
        return {
            ...state,
            playlists: action.payload,
        }
    }
    if(action.type === 'setCurrent') {
        return {
            ...state,
            current: action.payload,
        }
    }
    if(action.type === 'setTracks') {
        return {
            ...state,...state,
            tracks: action.payload,
        }
    }
    if(action.type === 'setUserId') {
        return {
            ...state,
            userId: action.payload
        }
    }
    if(action.type === 'setAccessToken') {
        return {
            ...state,
            access_token: action.payload,
        }
    }

    return state;
}

const sagaMiddleware = createSagaMiddleware();


const store = createStore(playlistReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store;


