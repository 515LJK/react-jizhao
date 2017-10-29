import React, {Component} from 'react';

import './QR.css';


class QR extends Component{

	render(){
		return (
			<div className="QR-wrap">
			    <img src={require('image/QR-bg.png')} className="bg"></img>
			    <div className="QR-bg">
			        <img src={require('image/QR2.png')} className="QR"></img>
			        <div className="QR-title">我的二维码</div>
			    </div>
			</div>
		)
	}
}


export default QR;
