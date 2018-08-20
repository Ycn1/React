import React,{ Component } from 'react';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import './index.css'

class App extends Component{
	
	render(){
		
		return(
			<div className="App">
				<DatePicker />

			</div>				
		)
	}
}

export default App;