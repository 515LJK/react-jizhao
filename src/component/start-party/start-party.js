import React, {Component} from 'react';
import './start-party.css';

class StartParty extends Component{

	render(){
		return (
			<div>
				<div className="StartParty-head">
					<div className="StartParty-title"><span>我要约饭</span></div>
					<div className="StartParty-message">
					    <img src={require('image/party-img.png')} className="StartParty-img"></img>
					    <span className="StartParty-name">Yan</span>
					</div>
				</div>
				<div className="StartParty-select">
					<form className="StartParty-form">
					    <div className="form-item">
					        <label>标签：</label>
					        <select  className="form-picker">
					        	<option>大叔</option>
					        	<option>萝莉</option>
					        </select>
					        <img src={require('image/down.png')} className="form-down"></img>
					    </div>
					    <div className="form-item">
					        <label>门店：</label>
					        <select  className="form-picker">
					        	<option>番禺店</option>
					        	<option>珠江新城店</option>
					        </select>
					        <img src={require('image/down.png')} className="form-down"></img>
					    </div>
					    <div className="form-item">
					        <label>主题：</label>
					        <input className="form-picker" />
					        <img src={require('image/down.png')} className="form-down"></img>
					    </div>
					    <div className="form-item">
					        <label>日期：</label>
					        <input className="form-picker" />
					        <input type="date" className="form-date"/>
					        <img src={require('image/down.png')} className="form-down"></img>
					    </div>
					    <div className="form-item">
					        <label>时间：</label>
					        <input className="form-picker" />
					        <input type="date" className="form-date"/>
					        <img src={require('image/down.png')} className="form-down"></img>
					    </div>
					    <div className="form-remind">
					        <input type="checkbox" className="form-check"/>
					        	<p>我已阅读并同意<span className="remind" >须知</span></p>
					    </div>
					    <div className="form-btn">
					        <button>发布</button>
					    </div>
					</form>
				</div>
			</div>
		)
	}
}


export default StartParty;
