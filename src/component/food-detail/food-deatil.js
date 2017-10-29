import React, {Component} from 'react';
import {collect} from 'redux1/actions/collect.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import './food-deatil.css';

class foodDeatil extends Component{

	render(){
		let {collect,bindCollect} = this.props,
			index = this.props.match.params.index,
			opt = {index:index,type:'food'},
			Scollect = collect.collect['food'][index],
			data = [{title:'寿司套餐A',type:'hot'},{title:'寿司套餐B',type:'new'}];

		return (
		    <div className="foodDeatil-wrap">
			    <img src={require('image/food.png')} className="foodDeatil-img"></img>
			    <div className="foodDeatil-show">
			        <div className="foodDeatil-title">
			            <div className="foodDeatil-titileL">
			                <span className="foodDeatil-name">{data[index].title}</span>
			                <div className={"foodDeatil-"+data[index].type}><img src={require('image/'+data[index].type+'.png')}></img><span>{data[index].type=='hot'?'热销':'新品'}</span></div>
			            </div>
			            <div onClick={()=>this.props.bindCollect(opt)} className="foodDeatil-titileR">
			                <img src={Scollect?require('image/Scollect.png'):require('image/collect.png')}className="collect-img" />
				            <span className={Scollect?'collect active':'collect'}>{Scollect?'已收藏':'收藏'}</span>
			            </div>
			        </div>
			        <div className="foodDeatil-area"><span className="foodDeatil-price">￥52.<span>00</span></span><img src={require('image/area.png')}></img><span className="foodDeatil-areaName">正佳广场店</span></div>
			        <span className="foodDeatil-day">天河路1号正佳广场</span>
			    </div>
			    <div className="foodDeatil-text">
			        <span>详情</span>
			    </div>
			    <div className="foodDeatil-detail">
			        <img src={require('image/food.png')}></img>
			    </div>
			</div>
		)
	}
}


const mapStateToProps = (state)=>{
	return {
		collect:state.collect
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		bindCollect:(obj)=>{
			dispatch(collect(obj))
		}
	}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(foodDeatil));
