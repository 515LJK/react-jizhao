import React, {Component} from 'react';

import './coupon.css';


class Coupon extends Component{

	render(){

		return (
			<div className="CouponWrap">
			    <div className="head-list">
			        <div className="head-item active">所有</div>
			        <div className="head-item">注册赠送</div>
			        <div className="head-item">满额赠送</div>
			        <div className="head-item">消费频率赠送</div>
			    </div>
			    <div className="content-list">
			        <a className="content-item">
			            <img src={require('image/coupon2.png')} className="coupon-bg"></img>
			            <div className="coupon-title">
			                <span className="coupon-type">注册赠送</span>
			                <span className="coupon-name">赠送套餐A</span>
			            </div>
			            <div className="coupon-time">有效期至：2017-08-09</div>
			            <div className="coupon-state">未使用</div>
			            <div className="coupon-price"><span>￥</span>15.00</div>
			        </a>
			        <a  className="content-item" >
			            <img src={require('image/coupon2.png')} className="coupon-bg"></img>
			            <div className="coupon-title">
			                <span className="coupon-type">注册赠送</span>
			                <span className="coupon-name">赠送套餐A</span>
			            </div>
			            <div className="coupon-time">有效期至：2017-08-09</div>
			            <div className="coupon-state">未使用</div>
			            <div className="coupon-price"><span>￥</span>15.00</div>
			        </a>
			        <a className="content-item">
			            <img src={require('image/coupon2.png')} className="coupon-bg"></img>
			            <div className="coupon-title">
			                <span className="coupon-type">注册赠送</span>
			                <span className="coupon-name">赠送套餐A</span>
			            </div>
			            <div className="coupon-time">有效期至：2017-08-09</div>
			            <div className="coupon-state">未使用</div>
			            <div className="coupon-price"><span>￥</span>15.00</div>
			        </a>
			    </div>
			</div>
		)
	}
}


export default Coupon;
