import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class Item extends Component{
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this)
	}
	
	handleDelete(){
		const { handleDelete,index } = this.props;
		handleDelete(index);
	}

	render(){
		const { content } = this.props;
		return (
			<li onClick={this.handleDelete}>
				{content}
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