

import * as type from './actionTypes.js';

const resource = {
	list:['aaa','bbb'],
	value:'hello'
}

export default (state=resource,action)=>{

	if(action.type  == type.CHANGE_VALUE ){
			const newState =  JSON.parse(JSON.stringify(state));

			newState.value = action.payload;

			return newState;
	}

	if(action.type == type.ADD_ITEM ){

		const newState = JSON.parse(JSON.stringify(state));

		newState.list.push(state.value);
		newState.value = '';

		return newState;

	}
	if(action.type == type.SET_DATA_INIT ){

		const newState =  JSON.parse(JSON.stringify(state));

			newState.list = action.payload;

			return newState;

	}

	if(action.type == type.DELETE_ITEM){
		const newState = JSON.parse(JSON.stringify(state));

		newState.list.splice(action.payload,1);

		return newState;
	}
	return  state;
}