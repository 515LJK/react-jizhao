import React, {Component} from 'react';
import {connect} from 'react-redux';
import {collect} from 'redux1/actions/collect.js';
import {withRouter} from 'react-router';

import './store-detail.css';

class storeDetail extends Component{

	render(){
		let {collect,bindCollect} = this.props,
			index = this.props.match.params.index,
			opt = {index:index,type:'store'},
			Scollect = collect.collect['store'][index],
			data = [{title:'珠江新城店',type:'hot'},{title:'番禺店',type:'ye'}]

		return (
		    <div className="storeDetail-wrap">
			    <img src={require('image/store.png')} className="storeDetail-img"></img>
			    <div className="storeDetail-show">
			        <div className="storeDetail-title">
			            <div className="storeDetail-titileL">
			                <span className="storeDetail-name">{data[index].title}</span>
			                <div className={"storeDetail-"+data[index].type}><img src={require('image/'+data[index].type+'.png')}></img><span>{data[index].type=='hot'?"火爆开业":'环境最优'}</span></div>
			            </div>
			            <div onClick={()=>this.props.bindCollect(opt)} className="storeDetail-titileR {{collect?'active':''}}">
			                <img src={Scollect?require('image/Scollect.png'):require('image/collect.png')}className="collect-img" />
				            <span className={Scollect?'collect active':'collect'}>{Scollect?'已收藏':'收藏'}</span>
			            </div>
			        </div>
			        <div className="storeDetail-area">
			            <img src={require('image/area.png')}></img>
			            <span>广州市天河区珠光新城御景自编号106号</span>
			        </div>
			        <div className="storeDetail-iphone"><img src={require('image/iphone.png')}></img><span>(020)28382918</span></div>
			    </div>
			    <div className="storeDetail-span">
			        <span>详情</span>
			    </div>
			    <div className="storeDetail-detail">
			        <img src={require('image/store.png')}></img>
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



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(storeDetail));
