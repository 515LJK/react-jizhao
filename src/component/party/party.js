import React,{Component} from 'react';

import {Link} from 'react-router-dom';

import './party.css';


class Party extends Component{

	render(){
		return (
			<div className="party-list">
			    <Link to="/member/party-detail" className="party-item">
			        <div className="party-item-head">
			            <div className="headL">
			                <img src={require('image/party-img.png')} className="party-img"></img>
			                <span className="party-Pname">yan</span>
			                <div className="party-icon nv">花之恋少女</div>
			            </div>
			            <div className="headR">
			                <img src={require('image/Sthumbs.png')} className="party-thumbs"></img>
			                <span className="party-num">10</span>
			            </div>
			        </div>
			        <div className="party-detail1">
			            <div className="detail-item1">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/theme.png')} className="detail-icon"></img>
			                </div>
			                <span>主题：<span className="detail-span">甄爱主题</span></span>
			            </div>
			            <div className="detail-item1">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/store2.png')} className="detail-icon"></img>
			                </div>
			                <span>门店：<span className="detail-span">珠江新城店</span></span>
			            </div>
			            <div className="detail-item1">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/area.png')} className="detail-icon"></img>
			                </div>
			                <span>地址：<span className="detail-span">广州市天河区珠光新城御景自编号106号</span></span>
			            </div>
			            <div className="detail-item1">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/time.png')} className="detail-icon"></img>
			                </div>
			                <span>时间：<span className="detail-span">2017-08-11 11:30</span></span>
			            </div>
			        </div>
			    </Link>
			</div>
		)

	}

}


export default Party;
