import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
