
import React,{ Component,applyMiddleware } from 'react';

import { connect } from 'react-redux';

import './App.css';

import Todolist from './pages/todolist/index.js'


class App extends Component{


	
	render(){

		
		return(
			<div className="App">
			  <Todolist />
			</div>				
		)
	}
}



export default App;