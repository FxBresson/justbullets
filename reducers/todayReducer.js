import { defaultValue } from '../helper'
import moment from 'moment'

const todayReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRACKER': 
            let t = {
                id: state.length,
                value: defaultValue(action.newTracker.type)
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
            return state.map((e) => {
                if (e.id === action.trackerId) {
                    e.value = Math.max(0, --e.value)
                }
                return e
            })

        case 'TOGGLE_TRACKER':
            return state.map((e) => {
                if (e.id === action.trackerId) {
                    e.value = !e.value
                }
                return e
            })
            
        case 'SET_VALUE':
            return state.map((e) => {
                if (e.id === action.trackerId && !isNaN(action.value)) {
                    e.value = action.value
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

    case 'SAVE_DAY': 
      let today = moment()
    
      return state.map((e, i) => {
        let tracker = action.trackerList[i]

        switch(tracker.period) {
          case 'day':
            e.value = defaultValue(tracker.type)
          case 'week':
            if (today.isoWeekday() === 0) {
              e.value = defaultValue(tracker.type)
            }
          case 'month':
            if (today === today.startOf('month')) {
              e.value = defaultValue(tracker.type)
            }
          default:
        }
        return e
      })

    default:
      return state
  }
}

export default todayReducer
