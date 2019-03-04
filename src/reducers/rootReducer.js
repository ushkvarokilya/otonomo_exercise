import { combineReducers } from 'redux-immutablejs'
import eventsReducer from './events'
import streamerReducer from './streamers'

export default combineReducers({
  events: eventsReducer,
  streamers: streamerReducer,
})
