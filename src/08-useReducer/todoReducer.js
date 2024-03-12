
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState , action.playload];

        case '[TODO] Remove Todo':
            return initialState.filter( item => item.id !== action.playload );

        case '[TODO] Togle Todo':
            return initialState.map( item =>
                {
                    if (item.id === action.playload) {
                        return {
                            ...item,
                            done: !item.done
                        }
                    }
                    else {
                        return item;
                    }
                });

        default:
            return initialState;
    }
}