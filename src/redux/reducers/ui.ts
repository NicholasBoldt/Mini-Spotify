const initialState: { create: boolean, edit: boolean, search: boolean, dark: boolean} = { 
    create: false,
    edit: false,
    search: false,
    dark: false
};

const uiReducer: any = (state = initialState, action: any) => {
    if(action.type === 'setCreate') {
        return {
            create: true,
            edit: false,
            search: false,
            dark: state.dark
        }
    }
    if(action.type === 'setEdit') {
        return {
            create: false,
            edit: true,
            search: false,
            dark: state.dark
        }
    }
    if(action.type === 'setSearch') {
        return {
            create: false,
            edit: false,
            search: true,
            dark: state.dark
        }
    }
    if(action.type === 'setClose') {
        return {
            create: false,
            edit: false,
            search: false,
            dark: state.dark
        }
    }
    if(action.type === 'setDark') {
        return {
            ...state,
            dark: !state.dark
        }
    }

    return state;
}

export default uiReducer;