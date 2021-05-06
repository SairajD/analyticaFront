import {combineReducers} from 'redux';
import addNegativeTweetReducer from './addNegativeTweetReducer';
import addPositiveTweetReducer from './addPositiveTweetReducer';
import addNegativeInstaReducer from './addNegativeInstaReducer';
import addPositiveInstaReducer from './addPositiveInstaReducer';
import changeDashReducer from './changeDashReducer';
import changeSocialReducer from './changeSocialReducer';
import changeThemeReducer from './changeThemeReducer';
import addNeutralInstaReducer from './addNeutralInstaReducer';
import addNeutralTweetReducer from './addNeutralTweetReducer';
import openCloseDrawerReducer from './openCloseDrawerReducer';


const allReducer = combineReducers({
    negativeTweets: addNegativeTweetReducer,
    positiveTweets: addPositiveTweetReducer,
    negativeInsta: addNegativeInstaReducer,
    positiveInsta: addPositiveInstaReducer,
    changeDash: changeDashReducer,
    changeSocial: changeSocialReducer,
    changeTheme: changeThemeReducer,
    neutralTweets: addNeutralTweetReducer,
    neutralInsta: addNeutralInstaReducer,
    openCloseDrawer: openCloseDrawerReducer,
});
export default allReducer;