import { List, fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'

const INITIAL_STATE = List()

function addEvent(state, action) {
  const { carData } = action.payload
  return state.push(fromJS(carData))
}

const events = createReducer(INITIAL_STATE, {
  ADD_EVENT: addEvent,
})

export default events
