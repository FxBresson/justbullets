const trackerReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRACKER': 
            let t = {
                id: state.length,
                active: true,
                ...action.newTracker
            }
            return [...state, t]

        case 'REMOVE_TRACKER':
            return state.map(tracker => {
                if (tracker.id === action.trackerId) {
                    tracker.active = false
                }
                return tracker
            })

        default:
            return state
    }
};

export default trackerReducer;