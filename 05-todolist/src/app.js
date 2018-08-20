import React,{ Component } from 'react';

import axios from 'axios';
import Item from './Item';

//引入css
import './index.css';

//定义组件
//必须继承React.Component
class App extends Component{
	
	constructor(props){
		super(props);
		//初始化state,state代表当前页面中的数据
		this.state = {
			value :'',
			list:['aa','bb']
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}


	handleAdd(){
	
		this.setState((preState)=>({
			list:[...preState.list,preState.value],
			value:''
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))
		});				
	}
	handleChange(e){
		
		const value = this.input.value;
		this.setState((preState)=>({
			value
		}));

	}
	
	handleDelete(index){
		
		this.setState((preState)=>{
			const list = [...preState.list];
			list.splice(index,1)
			return {
				list
			}			
		})	
	}
	getItems(){	
		return	this.state.list.map((item,index)=>{
					return(
						<Item 
							key={index} 
							content={item} 
							index={index}
							handleDelete={this.handleDelete}
						/>	
					)
				})
	}

	static getDerivedStateFromProps(nextProps, prevState){
		console.log('App getDerivedStateFromProps',nextProps,prevState);
		return (
				prevState.list
			)

	}
	componentDidMount(){
		console.log('componentDidMount');

		axios
		.get('http://127.0.0.1:3000/api/getData')
		.then((data)=>{
			this.setState(()=>({
				list:data.data
			}))
		})
		.catch((e)=>{
			console.log(e);
		})
	}
	// shouldComponentUpdate(nextProps, nextState){
		// console.log('shouldComponentUpdate');
		//当return false的时候，不允许改变值
		//return false;
		//当return false的时候，允许改变值
		// return true;
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState){
	// 	console.log('getSnapshotBeforeUpdate');
	// 	return(
	// 		111
	// 	)
	// }
	// componentDidUpdate(prevProps, prevState,snapshot){
	// 	console.log('componentDidUpdate',snapshot);
	// }
	//必须有一个render方法
	//JSX语法
	render(){
		//return 只能返回一个
		return(
			<div className="App">
				<input 
					value={this.state.value} 
					onChange={this.handleChange} 
					ref = {(input)=>{
						this.input = input
					}}
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul ref = {(ul)=>{
						this.ul = ul
					}}>
					{
						this.getItems()
					}
				</ul>
			</div>				
		)
	}
}
//导出组件 ==  module.exports = App
export default App;