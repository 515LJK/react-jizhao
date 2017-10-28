import React, {Component} from 'react';
import './face-party.css';

class FaceParty extends Component{

	constructor(props){
		super(props);
		this.state = {
			count:0,
			arr : ['','','',''],
			numArr :['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '','←']
		}
	}

	//输入数字
	bindInput(num){
		let count = this.state.count,
			arr = this.state.arr;

		switch(num){
            case '←':
                count = count<=0?0:--count;
                arr[count] = '';
                break;
            case '':
                break;
            default :
                arr[count++] = num;
                break;
        };

        if(count>=4){
        	count = 4;
        	arr.length = 4;
        }

        this.setState({
        	arr:arr,
        	count:count
        })
	}

	render(){

		let arr = this.state.arr,
			numArr = this.state.numArr;

		return (
			<div className="face-wrap">
			    <div className="face-block">
			        <span className="face-title">面对面约饭</span>
			        <span className="face-explain">和身边的朋友输入同样的四个数字，</span>
			        <span className="face-explain">在十分钟内，前八位可以进入同一饭局</span>
			        <div className="face-list">
			        	{arr.map((value,index)=>{
			        		return <span key={index} className="face-item">{value}</span>
			        	})}
			        </div>
			    </div> 
			    <div className="face-input">
			    	{numArr.map((value,index)=>{	
			        	return <div key={index} onClick={this.bindInput.bind(this,value)} className="input-item">{value}</div>
			    	})}
			    </div>
			</div>
		)
	}
}


export default FaceParty;
