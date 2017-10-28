import {INDEXTAB} from '../actions/indexTab.js';

const initState = {
	current:0
}

function reducer(state=initState,action){
	switch(action.type){
		case INDEXTAB:
			return {
				current:action.index
			}
		default:
			return state
	}
}

export default reducer;