import { fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'

const INITIAL_STATE = fromJS({})

function addStreamer(state, action) {
  const { vin, streamer, color } = action.payload
  return state.set(vin, fromJS({ streamer, color }))
}

function toggleStreamer(state, action) {
  const { vin } = action.payload
  const stream = state.getIn([vin, 'streamer'])
  if (stream.isStreaming) {
    stream.stop()
  } else {
    stream.start()
  }
  return state.setIn([vin, 'streamer'], stream)
}

const streamers = createReducer(INITIAL_STATE, {
  ADD_STREAMER: addStreamer,
  TOGGLE_STREAMER: toggleStreamer,
})

export default streamers
