import React,{Component} from 'react';

import './progress.css';

class Progress extends Component{

	render(){

		let {num,total} = this.props,
			per = (num/total)*100 + '%';

		return (
			<div className="progress">
		        <div className="bar" style={{width:per}}></div>
		    </div>
		)

	}

}

export default Progress;