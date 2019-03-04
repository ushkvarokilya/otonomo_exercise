import { createStore, applyMiddleware } from 'redux'
import { fromJS } from 'immutable'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export default function configureStore() {
  return createStore(rootReducer, fromJS({}), applyMiddleware(thunk))
}
