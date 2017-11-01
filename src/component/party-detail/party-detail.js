import React, {Component} from 'react';

import './party-detail.css';

class PartyDetail extends Component {

	render(){

		return (
			<div className="invite-wrap">
			    <div className="invite-head">
			        <img src={require('image/Scollect.png')} className="collect"></img>
			        <div className="collect-mask">
			            <div className="collect-message">
			                <span>主题：臻爱主题（人均￥60-￥120）</span>
			                <span>门店：珠江新城店</span>
			                <span>地址：广州市天河区珠江新城御景自编号106号</span>
			            </div>
			        </div>
			    </div>
			    <div className="invite-content">
			        <div className="join-people">
			            <span>参加人员</span>
			        </div>
			        <div className="people-list">
			        	<img src={require('image/party-img.png')} className="people-item"></img>
			            <img src={require('image/people.png')} className="people-item"></img>
			        </div>
			    </div>
			    <button className="join-btn" >参加饭局</button>
			</div>
		)

	};

};



export default PartyDetail;