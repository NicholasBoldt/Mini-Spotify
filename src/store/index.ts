import { createStore } from 'redux';
import TrackList from '../components/Tracks/TrackList';


const initialState: { playlists: any[], current: any, tracks: any[]} = { 
    playlists: [],
    current: {},
    tracks: []
};

const playlistReducer: any = (state = initialState, action: any) => {
    if(action.type === 'setPlaylists') {
        return {
            playlists: action.payload,
            current: state.current,
            tracks: state.tracks,
        }
    }
    if(action.type === 'setCurrent') {
        return {
            playlists: state.playlists,
            current: action.payload,
            tracks: state.tracks,
        }
    }

    return state;
}


const store = createStore(playlistReducer);


export default store;


