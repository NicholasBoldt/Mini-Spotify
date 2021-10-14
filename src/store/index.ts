import { createStore } from 'redux';


const initialState: { access_code: string, playlists: any[], current: any, tracks: any[], userId: string} = { 
    access_code: '',
    playlists: [],
    current: {},
    tracks: [],
    userId: ''
};

const playlistReducer: any = (state = initialState, action: any) => {
    if(action.type === 'setPlaylists') {
        return {
            access_code: state.access_code,
            playlists: action.payload,
            current: state.current,
            tracks: state.tracks,
            userId: state.userId
        }
    }
    if(action.type === 'setCurrent') {
        return {
            access_code: state.access_code,
            playlists: state.playlists,
            current: action.payload,
            tracks: state.tracks,
            userId: state.userId
        }
    }
    if(action.type === 'setTracks') {
        return {
            access_code: state.access_code,
            playlists: state.playlists,
            current: state.current,
            tracks: action.payload,
            userId: state.userId
        }
    }
    if(action.type === 'setUserId') {
        return {
            access_code: state.access_code,
            playlists: state.playlists,
            current: state.current,
            tracks: state.tracks,
            userId: action.payload
        }
    }
    if(action.type === 'setAccessCode') {
        return {
            access_code: action.payload,
            playlists: state.playlists,
            current: state.current,
            tracks: state.tracks,
            userId: state.userId
        }
    }

    return state;
}


const store = createStore(playlistReducer);


export default store;


