import React, {Component} from 'react';

import './member-rights.css';


class MemberRights extends Component{

	render(){

		return (
			<div className="rightsWrap">
			    <div className="rightsTitle">
			        <img src={require('image/rights-bg.png')} className="rightsTitle-bg"></img>
			        <span>可享受权益</span>
			    </div>
			    <div className="rights-list">
			        <div className="rights-item">
			            <i className="rights-icon"></i>
			            <span>vip免排队特权</span>
			        </div>
			        <div className="rights-item">
			            <i className="rights-icon"></i>
			            <span>生日赠送50元代金券</span>
			        </div>
			        <div className="rights-item">
			            <i className="rights-icon"></i>
			            <span>免费领取小吃一份</span>
			        </div>
			    </div>
			    <div className="rightsDetail-title">
			        <span>详情</span>
			    </div>
			    <div className="rights-detail">
			        <div className="rightsDetail-item">会员的权利义务</div>
			        <div className="rightsDetail-span">积分商城中出售的商品或服务由各商户提供，积分商城仅提供会员与商户之间的平台服务，不对商户的商品或服务质量承担任何明示或默示的担保责任，不介入会员与商户之间因购买商品或服务可能发生的各种纠纷。会员选购的商品或服务出现质量、价格等问题，应直接与提供商品或服务的商户协商解决。</div>
			        <img src={require('image/activity.png')} className="rightsDetail-img"></img>
			    </div>
			</div>
		)
	}
}


export default MemberRights;
