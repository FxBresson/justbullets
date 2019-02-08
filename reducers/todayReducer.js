const todayReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRACKER':
      let t = {
        id: state.length,
        value: action.newTracker.type === 'normal' ? 0 : '',
      }
      return [...state, t]

    case 'REMOVE_TRACKER':
      return state.splice(state.findIndex(e => e === action.trackerId), 1)

    case 'INCREMENT_TRACKER':
      return state.map(e => {
        if (e.id === action.trackerId) {
          e.value++
        }
        return e
      })

    case 'DECREMENT_TRACKER':
      return state.map(e => {
        if (e.id === action.trackerId) {
          e.value = Math.max(0, --e.value)
        }
        return e
      })

    case 'SET_VALUE':
      return state.map(e => {
        if (e.id === action.trackerId && !isNaN(action.value)) {
          e.value = action.value
        }
        return e
      })

    case 'SELECT_MOOD':
      return state.map(e => {
        if (e.id === action.trackerId) {
          e.value = action.mood
        }
        return e
      })

    default:
      return state
  }
}

export default todayReducer
