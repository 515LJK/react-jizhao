import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './activity.css';

class Activity extends Component{

	constructor(props){
		super(props);

		this.state = {
			data:[{title:'鳗鱼寿司套餐大优惠',type:'ing'},{title:'三文鱼寿司套餐大折扣',type:'countdown'}]
		}
	}

	render(){

		let arr = this.props.data?this.props.data:[true,true];

		return (
		    <ul className="activity-list">
		        {	
		        	this.state.data.map((val,index)=>{
		        		let {type,title} = val;
						return (
							<li key={index} className={arr[index]?'activity-item':"activity-item hidden"}>
					            <Link to={"/index/activity-detail/"+index}>
						            <img src={require('image/activity.png')} className="activity-img"></img>
						            <div className="activity-right">
						                <span className="activity-title">{title}</span>
						                <span className="activity-discount">周末满100减5，还不走起？</span>
						                <div className="activity-display"><span className="activity-time">8月10日</span><div className={"activity-"+type}><img src={require('image/'+type+'.png')}></img><span>{type === 'ing'?'进行中':'倒计时'}</span></div></div>
						            </div>
					            </Link>
			        		</li>
		        		)
					})
		    	}
		    </ul>
		)
	}
}

Activity.propTypes = {
    data:PropTypes.array
}


export default Activity;
