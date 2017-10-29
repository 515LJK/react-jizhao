import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Party from 'component/party/party.js';

import './invite.css';


class Invite extends Component{

	render(){
		return (
		<div>
			<div className="start">
			    <Link to="/invite/start-party" className="start-link">
			        <img src={require('image/start-icon.png')} />
			        <span>发起饭局</span>
			    </Link>
			</div>
			<div className="face-party">
			    <img src={require('image/face-party-bg.png')} />
			    <Link to="/invite/face-party" className="face-link">面对面约饭</Link>
			</div>
			<Party />
		</div>
		)
	}
}


export default Invite;