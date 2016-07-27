import {combineReducers} from 'redux';
import {LOAD_DATA, SET_LOADING, loadData, setLoading} from '../actions/AsyncDemoActions';

function loading (state = false, action) {
    if (action.type === SET_LOADING) {
        return action.state;
    }
    return state;
}

function data (data = [{ref: 'null', description: 'not loaded'}], action) {
    if (action.type === LOAD_DATA) {
        return action.data;
    }
    return data;
}

const asyncDemo = combineReducers({
    loading,
    data
});

export default asyncDemo;
