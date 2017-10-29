import React, {Component} from 'react';

import './deal-record.css';


class DealRecord extends Component{

	render(){
		return (
			<div className="deal-wrap">
			    <div className="deal-head">
			        <div className="head-item">
			            <span className="head-num">10</span>
			            <span className="head-span">累计交易次数</span>
			        </div>
			        <a className="head-item">
			            <span className="head-num">9</span>
			            <span className="head-span">常去门店</span>
			        </a>
			    </div>
			    <div className="deal-list">
			        <div className="party-detail">
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/theme.png')} className="detail-icon"></img>
			                </div>
			                <span>主题：<span className="detail-span">甄爱主题</span></span>
			            </div>
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/store2.png')} className="detail-icon"></img>
			                </div>
			                <span>门店：<span className="detail-span">珠江新城店</span></span>
			            </div>
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/area.png')} className="detail-icon"></img>
			                </div>
			                <span>地址：<span className="detail-span">广州市天河区珠光新城御景自编号106号</span></span>
			            </div>
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/time.png')} className="detail-icon"></img>
			                </div>
			                <span>时间：<span className="detail-span">2017-08-11 11:30</span></span>
			            </div>
			        </div>
			        <div className="party-detail">
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/theme.png')} className="detail-icon"></img>
			                </div>
			                <span>主题：<span className="detail-span">甄爱主题</span></span>
			            </div>
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/store2.png')} className="detail-icon"></img>
			                </div>
			                <span>门店：<span className="detail-span">珠江新城店</span></span>
			            </div>
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/area.png')} className="detail-icon"></img>
			                </div>
			                <span>地址：<span className="detail-span">广州市天河区珠光新城御景自编号106号</span></span>
			            </div>
			            <div className="detail-item">
			                <div className="detail-icon-wrap">
			                    <img src={require('image/time.png')} className="detail-icon"></img>
			                </div>
			                <span>时间：<span className="detail-span">2017-08-11 11:30</span></span>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}


export default DealRecord;
