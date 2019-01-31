const trackerReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRACKER': 
            let t = {
                id: state.length,
                ...action.newTracker
            }
            return [...state, t]

        case 'REMOVE_TRACKER':
            return state.splice( state.findIndex(e => e === action.trackerId), 1 );

        default:
            return state
    }
};

export default trackerReducer;