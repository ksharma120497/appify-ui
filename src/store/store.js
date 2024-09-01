import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './index';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
window.store= store;

export const dispatch = store.dispatch;

export default store;