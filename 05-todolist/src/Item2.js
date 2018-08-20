import React, {Component} from 'react';

import PropTypes from 'prop-types';

{
	/*
		子不能改变父的数据
		不能直接传递父的数据
		return 后面需要有内容跟着，如果换行需要加上括号

	*/
}

class Item extends Component{
	constructor(props){

		super(props);

		this.handleDelete = this.handleDelete.bind(this)
	}
	handleDelete(index){
		const { handleDelete,index } = this.props;
		handleDelete(index);
	}
	render(){
		const { content } = this.props;
	return (
			<li onClick={this.handleDelete}>
				{ content }
			</li>
		)

}

}
Item.propTypes = {
	content:PropTypes.string.isRequired,

	index:PropTypes.number,

	handleDelete:PropTypes.func
}

Item.defaultProps = {
	content:"aaa"
}
export default Item;
