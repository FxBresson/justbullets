import { combineReducers } from 'redux'
import trackerReducer from './trackerReducer'
import todayReducer from './todayReducer'
import historyReducer from './historyReducer'

export default combineReducers({
    trackers: trackerReducer,
    today: todayReducer,
    history: historyReducer
})
