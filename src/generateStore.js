import 'babel-polyfill' // Required for async/await in redux-saga
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import reducers from './reducer' // todo rename file

function generateStore(options, appReducers = {}, defaultState = {}) {
  // Redux DevTools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  var preloadedState = Object.assign({}, defaultState, {
    accounts: {},
    contracts: {},
    //web3: {}
  })

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const reducer = combineReducers({ ...reducers, ...appReducers})

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        thunkMiddleware
      )
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

module.exports = generateStore
