import {COLLECT} from '../actions/collect.js';

const initState = {
	collect:{
		activity:[false,false],
		food:[false,false],
		store:[false,false]
	}
}

function reducer(state=initState,action){

	let {type,options} = action;

	switch(type){
		case COLLECT:
			state.collect[options.type][options.index] = !state.collect[options.type][options.index];
			return {
				collect:state.collect
			}
		default:
			return state
	}
}

export default reducer;