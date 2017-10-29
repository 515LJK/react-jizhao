import React, {Component} from 'react';

import './select-detail.css';


class SelectDetail extends Component{
	render(){
		return (
			<div className="selectDetail-wrap">
			    <form className="selectDetail-Form">
			        <div className="selectDetail-Warp">
			            <img src={require('image/select.png')} className="selectDetail-select " />
			            <input type="text" className="selectDetail-Text" placeholder="请输入商品名、商家" />
			        </div>
			        <button className="selectDetail-Btn">搜索</button>
			    </form>
			    <div className="selectDetail-history">
			        <div className="selectDetail-title">历史搜索</div>
			        <div className="selectDetail-list">
			            <span className="selectDetail-item">寿司</span>    
			        </div>
			    </div>
			</div>
		)
	}
}


export default SelectDetail;
