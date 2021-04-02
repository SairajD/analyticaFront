import {combineReducers} from 'redux';
import addNegativeTweetReducer from './addNegativeTweetReducer';
import addPositiveTweetReducer from './addPositiveTweetReducer';
import changeDashReducer from './changeDashReducer';
import changeSocialReducer from './changeSocialReducer';


const allReducer = combineReducers({
    negativeTweets: addNegativeTweetReducer,
    positiveTweets: addPositiveTweetReducer,
    changeDash: changeDashReducer,
    changeSocial: changeSocialReducer,
});

export default allReducer;