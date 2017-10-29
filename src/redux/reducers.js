import collect from './reducers/collect.js';
import indexTab from './reducers/indexTab.js';
import collectTab from './reducers/collectTab.js';

import {combineReducers} from 'redux';

export default combineReducers({
	collect,
	indexTab,
	collectTab
})