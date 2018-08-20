

import { CHANGE_VALUE,ADD_ITEM,DELETE_ITEM } from './actionTypes.js';


export const change_value = (payload)=>{

	return {
			type:CHANGE_VALUE,
			payload
		}
};


 export const add_item = ()=>{
 	return ({type:ADD_ITEM})
 };

 export const delete_item  = (payload)=>{
 	return ({
 		type:DELETE_ITEM,
 	 	payload
 	 })
 }