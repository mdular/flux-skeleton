export const LOAD_DATA = 'LOAD_DATA';
// export const LOAD_DATA_COMPLETE = 'LOAD_DATA_COMPLETE';
export const SET_LOADING = 'SET_LOADING';

export function loadData(reference) {
    console.log('loadData', reference);

    // simulated asynchronous request
    // setTimeout(() => {
        let data = [{ref: 'D1I4X', description: 'an item asynchronously returned'}];
    //     return {type: LOAD_DATA, reference: JSON.stringify(data)};
    // }, 300);

    // setLoading(true);

    return {type: LOAD_DATA, data};
}

export function setLoading(state) {
    console.log('setLoading', state);
    return {type: SET_LOADING, state};
}
