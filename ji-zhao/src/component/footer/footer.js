import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'; 
import './footer.css';

class Footer extends Component{
	render(){
		return (
			<ul className="footer">
				<li><NavLink  to="/index" activeClassName="active">首页</NavLink></li>
				<li><NavLink to="/invite" activeClassName="active">约饭</NavLink></li>
				<li><NavLink to="/member" activeClassName="active">我的</NavLink></li>
			</ul>
		)
	}
}


export default Footer;