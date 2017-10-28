import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {indexTab} from 'redux1/actions/indexTab.js';
import {connect} from 'react-redux';

import AutoPlay from 'component/autoPlay/autoPlay.js';
import Activity from 'component/activity/activity.js';
import Food from 'component/food/food.js';
import Store from 'component/store/store.js';

import './index.css';

class Index extends Component{

	render(){
		return (
			<div>
				<div className="searchHead">
				    <Link to="/select-detail" className="searchLink">
				        <img src={require('image/select.png')} className="iconSelect " />
				        <span className="searchInput">请输入商品名、商家</span>
				    </Link> 
				</div>
				<AutoPlay />
				<Tab/>
			</div>
		)
	}
}

class IndexTab extends Component{

	tabClass(index){
		return  index == this.props.index.current?'tab-item active':'tab-item';
	}

	render(){
		
		let {current} = this.props.index;

		return (
			<div>
				<div className="tab-list">
				    <div className={this.tabClass(0)} onClick={()=>this.props.bindTab(0)}><span>活动</span></div>
				    <div className={this.tabClass(1)} onClick={()=>this.props.bindTab(1)}><span>菜品</span></div>
				    <div className={this.tabClass(2)} onClick={()=>this.props.bindTab(2)}><span>门店</span></div>
				</div>
				{current === 0?<Activity/>:current === 1?<Food />:<Store/>}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        index: state.indexTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        bindTab: (index) => {
            dispatch(indexTab(index))
        }
    }
};


let Tab = connect(mapStateToProps, mapDispatchToProps)(IndexTab);

export default Index;
