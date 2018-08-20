import React, {Component,Fragment } from 'react';

import index from './index.css';


//定义组件
//必须继承React.Component

class App extends Component{

constructor(props){
	super(props);
	this.state={
		value:'',
		list:[]
	}

}

handleClick (){
	console.log("add...");
	this.setState({
		//把this.state.list的值和this.state.value的值合并到数组list中
		list:[...this.state.list,this.state.value],
		value:''

	})
}

 handelChange (e){ 
 	//e.terget.value是input 框输入的值
		console.log(e.target.value); 
		this.setState({
			value:e.target.value
		})

}

handleDelete(index){
	//不要在原数组上操作
	const list  =  [...this.state.list];
	//返回值是剪切掉的数组
	console.log(list.splice(index,1));

	this.setState({
		list:list
	})
}
	//必须有一个render方法
	render(){
		return(
			<div className= "box">
				<input value={this.state.value} onChange = {this.handelChange.bind(this)}/>
				<button onClick = {this.handleClick.bind(this)}>新增</button>

				<ul>{
						this.state.list.map((item,index)=>{
							return <li key= {index} 
							onClick={this.handleDelete.bind(this,index)}>
								{ item }
							</li>
						})
					}
				</ul>

			</div>
		)
	}
}


export default App;