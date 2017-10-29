import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './store.css';

class Store extends Component{

	constructor(props){
		super(props);

		this.state = {
			data:[{title:'珠江新城店',type:'hot'},{title:'番禺店',type:'ye'}]
		}
	}

	render(){

		let arr = this.props.data?this.props.data:[true,true];

		return (
		    <ul className="store-list">
		    {	
		    	this.state.data.map((val,index)=>{
		    		let {type,title} = val;
		            return (
		            	<li key={index} className={arr[index]?'store-item':"store-item hidden"}>
			                <Link to={"/store-detail/"+index}>
			                    <img src={require('image/store.png')} className="store-img"></img>
			                    <div className="store-right">
			                        <div className="store-title"><span className="store-name">{title}</span><div className={"store-"+type}><img src={require('image/'+type+'.png')}></img><span>{type==='hot'?'火爆开业':'环境最优'}</span></div></div>
			                        <div className="store-area"><img src={require('image/area.png')}></img><span>广州市天河区珠光新城御景自编号106号</span></div>
			                        <div className="store-iphone"><img src={require('image/iphone.png')}></img><span>(020)28382918</span></div>
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

Store.propTypes = {
    data:PropTypes.array
}



export default Store;
