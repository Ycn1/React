import React, {Component} from 'react';

{
	/*
		子不能改变父的数据
		不能直接传递父的数据
		return 后面需要有内容跟着，如果换行需要加上括号

	*/
}

class Item extends Component{

	handleDelete(index){
		this.props.handleDelete(this.props.index);
		console.log(this); 
	}
	render(){

	return (
			<li onClick={this.handleDelete.bind(this)}>
				{this.props.content	}
			</li>
		)

}

}
export default Item;
