import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';


class AppUI extends Component{


	render(props){
	
		return(
			<div className="App">
			    <Row>
			      <Col span={18} ><Input 
			      	value ={this.props.value} 
					onChange={this.props.handleChange} 
			      	
			      	/> </Col>
			      <Col span={6} ><Button type="primary" onClick = {this.props.handleAdd}>增加</Button></Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={this.props.list}
			      renderItem={(item,index) =>(<List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
			    />			    			
			</div>				
		)
	}
}

export default AppUI;