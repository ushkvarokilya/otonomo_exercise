import { createSelector } from 'reselect'
import { Map, List } from 'immutable'

export const streamersSelector = createSelector(
  (state, props) => state.get('streamers'),
  (streamers = Map()) => streamers,
)

export const eventsSelector = createSelector(
  (state, props) => state.get('events'),
  (events = List()) => events,
)
