import {combineReducers} from 'redux';
import {LOAD_DATA, SET_LOADING, LOAD_DATA_COMPLETE, loadData, setLoading} from '../actions/AsyncDemoActions';

function loading (state = false, action) {
    // console.log('loading reducer', action);

    switch (action.type) {
        case SET_LOADING:
            return action.state;
        default:
            return state;
    }
}

function data (state = {}, action) {
    // console.log('data reducer', action);

    switch (action.type) {
        case LOAD_DATA:
            return state;
        case LOAD_DATA_COMPLETE:
            return Object.assign({}, state, {
                [action.reference]: JSON.parse(action.data)
            });
        default:
            return state;
    }
}

const asyncDemo = combineReducers({
    loading,
    data
});

export default asyncDemo;
