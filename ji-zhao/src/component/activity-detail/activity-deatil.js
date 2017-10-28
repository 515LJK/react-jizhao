import React, {Component} from 'react';
import {collect} from 'redux1/actions/collect.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import './activity-detail.css';

class ActivityDeatil extends Component{
		
	render(){
		let {collect,bindCollect} = this.props,
			index = this.props.match.params.index,
			opt = {index:index,type:'activity'},
			Scollect = collect.collect['activity'][index],
			data = [{title:'鳗鱼寿司套餐大优惠',type:'ing'},{title:'三文鱼寿司套餐大折扣',type:'countdown'}];
			
		return (
		    <div className="activityDeatil-wrap">
				<img src={require('image/activity.png')} className="activityDeatil-img"/>
				<div className="activityDeatil-show">
				    <div className="activityDeatil-title">
				        <div className="activityDeatil-titileL">
				            <span className="activityDeatil-name">{data[index].title}</span>
				            <div className={"activityDeatil-"+data[index].type}><img src={require('image/'+data[index].type+'.png')}/><span>{data[index].type=='ing'?'进行中':'倒计时'}</span></div>
				        </div>
				        <div onClick={()=>this.props.bindCollect(opt)} className="activityDeatil-titileR">
				            <img src={Scollect?require('image/Scollect.png'):require('image/collect.png')}className="collect-img" />
				            <span className={Scollect?'collect active':'collect'}>{Scollect?'已收藏':'收藏'}</span>
				        </div>
				    </div>
				    <span className="activityDeatil-discount">周末满100减5，还不走起？</span>
				    <span className="activityDeatil-day">8月10日</span>
				</div>
				<div className="activityDeatil-text">
				    <span>详情</span>
				</div>
				<div className="activityDeatil-detail">
				    <img src={require('image/activity.png')} />
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
    return {
    	collect:state.collect
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        bindCollect: (obj) => {
            dispatch(collect(obj));
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityDeatil));
