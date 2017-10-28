import React,{Component} from 'react';
import {connect} from 'react-redux';
import {collectTab} from 'redux1/actions/collectTab.js';

import Activity from 'component/activity/activity.js';
import Food from 'component/food/food.js';
import Store from 'component/store/store.js';

import './collect.css';

class Collect extends Component{

	render(){

		let {activity,food,store} = this.props.data.collect,
			index = this.props.index.current;

		return (
			<div className="collect-wrap">
			    <div className="head-list">
			        <div onClick={()=>this.props.bindTab(0)} className={index==0?'head-item active':'head-item'}>所有</div>
			        <div onClick={()=>this.props.bindTab(1)} className={index==1?'head-item active':'head-item'}>活动</div>
			        <div onClick={()=>this.props.bindTab(2)} className={index==2?'head-item active':'head-item'}>菜品</div>
			        <div onClick={()=>this.props.bindTab(3)} className={index==3?'head-item active':'head-item'}>门店</div>
			    </div>
			    <div className="content">
			        <div className="collect-tab">
			        	{index===0||index===1?<Activity data={activity}/>:''}
			        </div>
			        <div className="collect-tab">
			        	{index===0||index===2?<Food data={food}/>:''}
			        </div>
			        <div className="collect-tab">
			        	{index===0||index===3?<Store data={store}/>:''}
			        </div>
			    </div>
			</div>
		)

	}

}

const MapStateToProps = (state)=>{
	return {
		data:state.collect,
		index:state.collectTab
	}
}

const MapDispatchToProps = (dispatch)=>{
	return {
		bindTab:(index)=>{
			dispatch(collectTab(index))
		}
	}
}


export default connect(MapStateToProps,MapDispatchToProps)(Collect);