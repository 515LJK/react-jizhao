import {COLLECTTAB} from '../actions/collectTab.js';

const initState = {
	current:0
}


function reducer(state=initState,action){
	switch(action.type){
		case COLLECTTAB:
			return {
				current:action.index
			}
		default:
			return state
	}
}

export default reducer;