import {combineReducers} from 'redux';
import addNegativeTweetReducer from './addNegativeTweetReducer';
import addPositiveTweetReducer from './addPositiveTweetReducer';

const allReducer = combineReducers({
    negativeTweets: addNegativeTweetReducer,
    positiveTweets: addPositiveTweetReducer
});

export default allReducer;