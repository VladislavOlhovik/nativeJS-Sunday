import {all, put, takeEvery } from 'redux-saga/effects'
import API from '../../API';

export function* search(searchWord){
    try{
        const result = yield API.searchFilmsByTitle(searchWord.text);
        if(result.data.Response === "True"){
            yield put({ type: "SET_SEARCH_RESULT", result: JSON.stringify(result.data.Search) })
        } else {
            yield put({ type: "SET_SEARCH_RESULT", result: result.data.Error })
        }
    } catch (e) {
        console.log('err', e);
    }
}

export function* searchListener () { // слушатель 
    yield takeEvery('SEARCH', search)
}

export default function* rootSaga(){   //комбайн для слушателей для саги
    yield all([searchListener()])
}