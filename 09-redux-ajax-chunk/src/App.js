
import React,{ Component,applyMiddleware } from 'react';

import { Input,Button,Row,Col,List } from 'antd';

import thunk from 'redux-thunk';

import store from './store/index.js';

import './App.css';

import AppUI from './appUI.js';

import axios from 'axios';

import { change_value,add_item,delete_item,set_data_init,set_init } from './store/actionCreator.js';


class App extends Component{
	constructor(props){
		super(props);
		this.state=store.getState();
		store.subscribe(()=>{
			this.setState(store.getState())
		});
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);

	}

	

	handleChange(e){
		const action = change_value(e.target.value);

		store.dispatch(action)
	}
	handleAdd(e){
		const action = add_item();
		store.dispatch(action)

	}

	handleDelete(index){
		const action = delete_item(index);
		store.dispatch(action)
	}
//安裝redux-thunk插件后store的dispatch方法可以接收一個函數
	componentDidMount(){
		console.log('componentDidMount');

		const action = set_init();

		store.dispatch(action)
	}
	
	render(){
		//return 只能返回一个
		
		return(	<AppUI 
					 value = {this.state.value}

					 list = {this.state.list}

					 handleDelete = {this.handleDelete}

					 handleAdd = {this.handleAdd}

					 handleChange = {this.handleChange}
				/>		
		)
	}
}
export default App;