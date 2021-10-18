const initialState: { create: boolean, edit: boolean, search: boolean} = { 
    create: false,
    edit: false,
    search: false
};

const uiReducer: any = (state = initialState, action: any) => {
    if(action.type === 'setCreate') {
        return {
            create: true,
            edit: false,
            search: false
        }
    }
    if(action.type === 'setEdit') {
        return {
            create: false,
            edit: true,
            search: false
        }
    }
    if(action.type === 'setSearch') {
        return {
            create: false,
            edit: false,
            search: true
        }
    }
    if(action.type === 'setClose') {
        return {
            create: false,
            edit: false,
            search: false
        }
    }

    return state;
}

export default uiReducer;