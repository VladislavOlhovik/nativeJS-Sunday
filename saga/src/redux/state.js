import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers/searchReducer';

const reducers = combineReducers({
	searchReducer: searchReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));


