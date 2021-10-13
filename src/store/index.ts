import { createStore } from 'redux';


const initialState: { playlists: any[], current: any, tracks: any[], userId: string} = { 
    playlists: [],
    current: {},
    tracks: [],
    userId: ''
};

const playlistReducer: any = (state = initialState, action: any) => {
    if(action.type === 'setPlaylists') {
        return {
            playlists: action.payload,
            current: state.current,
            tracks: state.tracks,
            userId: state.userId
        }
    }
    if(action.type === 'setCurrent') {
        return {
            playlists: state.playlists,
            current: action.payload,
            tracks: state.tracks,
            userId: state.userId
        }
    }
    if(action.type === 'setTracks') {
        return {
            playlists: state.playlists,
            current: state.current,
            tracks: action.payload,
            userId: state.userId
        }
    }
    if(action.type === 'setUserId') {
        return {
            playlists: state.playlists,
            current: state.current,
            tracks: state.tracks,
            userId: action.payload
        }
    }

    return state;
}


const store = createStore(playlistReducer);


export default store;


