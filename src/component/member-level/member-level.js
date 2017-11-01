import React, {Component} from 'react';

import Progress from 'component/progress/progress.js';

import './member-level.css';


class MemberLevel extends Component {

	render(){
		return (
			<div className="wrap">
			    <div className="head">
			        <img src={require('image/rights-bg.png')} className="head-bg"></img>
			        <div className="level-text">
			            <span className="level-name">青铜会员</span>
			            <span className="level-now">当前等级</span>
			            <div className="level-progress">
			            	<Progress total="100" num="60"/>
			                <span className="progress-num">60%</span>
			            </div>
			        </div>
			    </div>
			    <div className="store-span">
			        <span>等级界限</span>
			    </div>
			    <div className="list">
			        <div className="item">
			            <div className="name">
			                <img src={require('image/bronze.png')}className="crown"></img>
			                <span className="text">青铜会员</span>
			            </div>
			            <div className="explain">达到600分可升级为白银，享受更多优惠</div>
			        </div>
			        <div className="item">
			            <div className="name">
			                <img src={require('image/silver.png')}className="crown"></img>
			                <span className="text">白银会员</span>
			            </div>
			            <div className="explain">达到1200分可升级为铂金，享受更多优惠</div>
			        </div>
			        <div className="item">
			            <div className="name">
			                <img src={require('image/platinum.png')} className="crown"></img>
			                <span className="text">铂金会员</span>
			            </div>
			            <div className="explain">达到1800分可升级为黄金，享受更多优惠</div>
			        </div>
			        <div className="item">
			            <div className="name">
			                <img src={require('image/gold.png')} className="crown"></img>
			                <span className="text">黄金会员</span>
			            </div>
			            <div className="explain">最高等级为铂金，享受更多优惠</div>
			        </div>
			    </div>
			</div>
		)
	}

}


export default MemberLevel;