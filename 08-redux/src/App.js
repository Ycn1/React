
import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';

import store from './store/index.js';

import './App.css';

import { change_value,add_item,delete_item } from './store/actionCreator.js';


class App extends Component{
	constructor(props){
		super(props);
		this.state=store.getState();
		store.subscribe(()=>{
			this.setState(store.getState())
		});
		this.onChange = this.handleChange.bind(this);
		this.onClick = this.handleAdd.bind(this);
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
	
	render(){
		//return 只能返回一个
		return(
			<div className="App">
			    <Row>
			      <Col span={18} ><Input 
			      	value ={this.state.value} 
					onChange={this.handleChange} 
			      	
			      	/> </Col>
			      <Col span={6} ><Button type="primary" onClick = {this.handleAdd}>增加</Button></Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (<List.Item onClick = {this.handleDelete.bind(this,index)}>{item}</List.Item>)}
			    />			    			
			</div>				
		)
	}
}
export default App;