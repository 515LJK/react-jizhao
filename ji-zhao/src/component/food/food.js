import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './food.css';

class Food extends Component{

	constructor(props){
		super(props);

		this.state = {
			data:[{title:'寿司套餐A',type:'hot'},{title:'寿司套餐B',type:'new'}]
		}

	}

	render(){
		let arr = this.props.data?this.props.data:[true,true];

		return (
			<ul className="food-list">
				{	
					this.state.data.map((val,index)=>{
						let {type,title} = val;
						return(
						    	<li key={index} className={arr[index]?'food-item':"food-item hidden"}>
						            <Link to={"/food-detail/"+index}>
						                <img src={require('image/food.png')} className="food-img"></img>
						                <div className="food-right">
						                    <div className="food-title"><span className="food-name">{title}</span><div className={"food-"+type}><img src={require('image/'+type+'.png')}></img><span>{type==='hot'?'热销':'新品'}</span></div></div>
						                    <div className="food-area"><img src={require('image/area.png')}></img><span>正佳广场店</span></div>
						                    <div className="food-display"><span className="food-price">￥52.<span>00</span></span><div className="food-thumbs"><img src={require('image/thumbs.png')}></img><span>10</span></div></div>
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

Food.propTypes = {
    data:PropTypes.array
}


export default Food;
