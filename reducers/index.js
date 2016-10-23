import { combineReducers } from 'redux';
import count from './counter_reducer';

const counterApp = combineReducers({
    count: count
})

export default counterApp;