export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_COMPLETE = 'LOAD_DATA_COMPLETE';
export const SET_LOADING = 'SET_LOADING';
import store from '../store';

export function loadData(reference) {
    // console.log('loadData', reference);
    store.dispatch(setLoading(true));

    // simulated asynchronous request
    setTimeout(() => {
        let db = {
            'D1I4X': {ref: 'D1I4X', description: 'an item asynchronously returned'},
            'XX234': {ref: 'XX234', description: 'another item from the database'}
        }
        let data = JSON.stringify(db[reference]);
        store.dispatch(loadDataComplete(reference, data));
    }, 300);

    return {type: LOAD_DATA, reference: reference};
}

export function loadDataComplete(reference, data) {
    store.dispatch(setLoading(false));
    return {type: LOAD_DATA_COMPLETE, reference:reference, data:data};
}

export function setLoading(state) {
    return {type: SET_LOADING, state};
}
