import { createStore } from 'redux';
import asyncDemo from './reducers/AsyncDemoReducers';

let store = createStore(asyncDemo);

export default store;
