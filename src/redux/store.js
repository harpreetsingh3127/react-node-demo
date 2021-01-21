import {createStore,applyMiddleware} from 'redux';
import BookReducer from './book/bookReducer';
import logger from 'redux-logger';

const store=createStore(BookReducer,applyMiddleware(logger));

export default  store;