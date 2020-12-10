import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import rootSaga from './reducers/sagas';
import searchReducer from './reducers/searchReducer';

const reducers = combineReducers({
	searchReducer: searchReducer,
});
// export const store = createStore(reducers, applyMiddleware(thunk));

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
