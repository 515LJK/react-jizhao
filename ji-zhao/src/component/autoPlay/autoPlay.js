import React, {Component} from 'react';

import move from '../../common/js/move.js';

import './autoPlay.css';


class AutoPlay extends Component{


	componentDidMount(){
		var autoPlay = document.querySelector('.autoPlay');
		move(autoPlay,{time:3000,autoPlay:true})
	}

	render(){

		return (
			<div className="wrap">
				<ul className="autoPlay">
				    <li>
				        <img src={require('image/autoPlay.png')}></img>
				    </li>
				    <li>
				        <img src={require('image/autoPlay.png')}></img>
				    </li>
				    <li>
				        <img src={require('image/autoPlay.png')}></img>
				    </li>
				</ul>
			</div>
		)
	}
}


export default AutoPlay;
