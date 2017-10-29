import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Progress from 'component/progress/progress.js';

import './member.css';


class Member extends Component{
	render(){
		return (
			<div className="member-wrap">
			    <div className="member-head">
			        <img src={require('image/member-bg.png')} className="member-bg"></img>
			        <div className="member-img">
			            <img src={require('image/party-img.png')} className="member-image"></img>
			            <img src={require('image/bronze.png')} className="crown"></img>
			        </div>
			        <a className="level-link">
			            <div className="member-message">
			                <span className="member-name">Yan</span>
			                <div className="member-level">青铜会员</div>
			            </div>
			            <div className="level-progress">
			                <Progress total="100" num="60"/>
			                <span className="progress-num">60%</span>
			            </div>
			        </a>
			    </div>
			    <div className="member-content">
			        <div className="member-list">
			            <Link to="/member/member-rights" className="member-item">
			                <div>
			                    <img src={require('image/rights.png')} className="rights-icon"></img>
			                    <span>可享受的权益</span>
			                </div>
			                <div>
			                    <img src={require('image/right.png')} className="right-icon"></img>
			                </div>
			            </Link>
			            <div className="member-show">
			                <span className="show-item">vip免排队特权</span>
			                <span className="show-item">生日赠送50元代金券</span>
			                <span className="show-item">免费领取小吃一份</span>
			            </div>
			            <a className="member-item">
			                <div>
			                    <img src={require('image/activity-icon.png')} className="activity-icon"></img>
			                    <span>可参与的活动</span>
			                </div>
			                <div>
			                    <img src={require('image/right.png')} className="right-icon"></img>
			                </div>
			            </a>
			            <div className="member-show none-border">
			                <span className="show-item">狂扫2米寿司船</span>
			                <span className="show-item">季度粉丝狂欢节</span>
			            </div>
			            <div className="member-black"></div>
			            <Link to="/member/QR" className="member-item">
			                <div>
			                    <img src={require('image/QR.png')} className="QR-icon"></img>
			                    <span>我的二维码</span>
			                </div>
			                <div>
			                    <img src={require('image/right.png')} className="right-icon"></img>
			                </div>
			            </Link>
			            <Link to="/member/coupon" className="member-item">
			                <div>
			                    <img src={require('image/discount.png')} className="discount-icon"></img>
			                    <span>我的优惠券</span>
			                </div>
			                <div>
			                    <img src={require('image/right.png')} className="right-icon"></img>
			                </div>
			            </Link>
			            <Link to="/member/party-record" className="member-item">
			                <div>
			                    <img src={require('image/record.png')} className="record-icon"></img>
			                    <span>约饭记录</span>
			                </div>
			                <div>
			                    <img src={require('image/right.png')} className="right-icon"></img>
			                </div>
			            </Link>
			            <Link to="/member/deal-record" className="member-item">
			                <div>
			                    <img src={require('image/deal.png')} className="deal-icon"></img>
			                    <span>交易记录</span>
			                </div>
			                <div>
			                    <img src={require('image/right.png')} className="right-icon"></img>
			                </div>
			            </Link>
			            <Link className="member-item" to="/member/collect">
			                <div>
			                    <img src={require('image/xing.png')} className="collect-icon"></img>
			                    <span>收藏</span>
			                </div>
			                <div>
			                    <img src={require('image/right.png')} className="right-icon"></img>
			                </div>
			            </Link>
			        </div>
			    </div>
			</div>
			)
	}
}


export default Member;
