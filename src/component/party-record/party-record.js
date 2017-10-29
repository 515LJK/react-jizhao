import React, {Component} from 'react';

import './party-record.css';


class PartyRecord extends Component{

	render(){
		return (
			<div className="record-wrap">
			    <div className="recordHead-list">
			        <div className="recordHead-item active" >我发起</div>
			        <div className="recordHead-item" >我报名</div>
			        <div className="recordHead-item">感兴趣</div>
			        <div className="recordHead-item">我参与</div>
			    </div>
			    <div className="block"></div>
			    <div className="record-list">
			        <div className="record-item">
			            <img src={require("image/record-bg.png")} className="record-bg"></img>
			            <div className="record-detail">
			                <span className="title">主题：臻爱主题</span>
			                <span className="time">时间：2017-08-05  11:30</span>
			                <span className="store">门店：珠江新城店</span>
			            </div>
			            <div className="record-statue">审核中</div>
			        </div>
			        <div className="record-item">
			            <img src={require("image/record-bg.png")}className="record-bg"></img>
			            <div className="record-detail">
			                <span className="title">主题：臻爱主题</span>
			                <span className="time">时间：2017-08-05  11:30</span>
			                <span className="store">门店：珠江新城店</span>
			            </div>
			            <div className="record-statue cancel">取消约饭</div>
			        </div>
			    </div>
			</div>
		)
	}
}


export default PartyRecord;
