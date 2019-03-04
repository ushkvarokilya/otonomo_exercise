import createCarStreamer from '../api/car-data-streamer'
import { getRandomColor } from '../utils'

export const addCar = vin => dispatch => {
  const streamer = createCarStreamer(vin)
  streamer.subscribe(carData => {
    dispatch(addEvent(carData))
  })
  streamer.start()
  dispatch({
    type: 'ADD_STREAMER',
    payload: { vin, streamer, color: getRandomColor() },
  })
}

export const toggleStream = vin => dispatch => {
  dispatch({
    type: 'TOGGLE_STREAM',
    payload: { vin },
  })
}

export const addEvent = carData => dispatch => {
  return dispatch({
    type: 'ADD_EVENT',
    payload: { carData },
  })
}
