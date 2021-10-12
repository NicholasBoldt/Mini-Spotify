import { createStore } from 'redux';


const initialState: { playlists: any[]} = { 
    playlists: [],
};

const playlistReducer: any = (state = initialState, action: any) => {
    if(action.type === 'setPlaylists') {
        console.log('hit')
        return {
            playlists: action.payload
        }
    }

    return state;
}


const store = createStore(playlistReducer);


export default store;


