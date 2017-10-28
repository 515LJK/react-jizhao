
function move(obj,settings){
	return new Move(obj,settings);
}

function Move(obj,settings){
	this.obj = obj;
	this.obj.style.transform = this.obj.style.WebkitTransform = 'translate3d(0,0,0)'	//开启3d加速
	this.options = {			
		autoPlay:true,			
		time:500
	}

	if( settings ){
		this.extend(this.options,settings);
	}

	this.carousel();
}


/*轮播图*/
Move.prototype.carousel = function(){
	var that = this;
	var cloneC = this.obj.innerHTML;
	this.obj.innerHTML += cloneC;
	var len = this.obj.children.length;
	var widthP = this.obj.offsetParent.offsetWidth;
	var width = len * widthP;
	var startP = 0;
	var dis = 0;
	var listL = 0;
	var num = 0;
	var time = null;
	this.obj.style.display = 'flex';
	this.obj.style.width = width + 'px';
	this.obj.style.height = '100%';

	this.obj.addEventListener('touchstart',function(event){
		clearInterval(time);
		var e = event.changedTouches[0];
		startP = e.pageX;
		listL = that.css(this,'translateX');
		num = Math.abs(Math.round(listL/widthP));
		if( num === 0 ){
			num = len/2;
			that.css(this,'translateX',-widthP*num);
		}else if( num === len-1 ){
			num = (len/2) -1;
			that.css(this,'translateX',-widthP*num);
		}


		listL = that.css(that.obj,'translateX');
	});

	this.obj.addEventListener('touchmove',function(event){
		var e = event.changedTouches[0];
		dis = e.pageX - startP + listL;
		that.css(that.obj,'translateX',dis);
	});

	this.obj.addEventListener('touchend',function(event){
		num = Math.round(that.css(that.obj,'translateX') / widthP);
		that.startMove(that.obj,{'translateX':num*widthP},500,'easeOut',function(){
			if( that.options.autoPlay ){
				autoPlay();
			}
		});
	});

	if( this.options.autoPlay ){
		autoPlay();
	}

	function autoPlay(){

		that.options.time = that.options.time<600?600:that.options.time;

		time = setInterval(function(){
			num = Math.abs(num);
			num++;
			if( num >= len ){
				num = len/2 -1;
				that.css(that.obj,'translateX',-widthP*num);
				num++;
			}

			that.startMove(that.obj,{'translateX':-widthP*num},500,'linear');

		},that.options.time);
	}

};



/*extend*/

Move.prototype.extend = function(opt1,opt2){
	var that = this;

	for(var attr in opt2){
		if( typeof opt2[attr] === 'object' ){
			opt1[attr] = (opt2[attr].constructor === Array)?[]:{};
			that.extend(opt1[attr],opt2[attr]);
		}else{

			opt1[attr] = opt2[attr];
		}
	}

}



/*setter and getter*/
Move.prototype.css = function(obj,attr,val){

	if( attr == 'scale' || attr =='scaleX'||
		attr == 'scaleZ'|| attr =='scaleY'||
		attr =='translateX'||attr == 'translateZ'||
		attr =='translateY'||attr == 'rotate' || 
		attr =='rotateX' ||attr == 'rotateZ'|| 
		attr =='rotateY' ||attr == 'skewX'  || 
		attr =='skewY'){

		return this.transformCss(obj,attr,val);
	}
	

	if( typeof val === 'undefined' ){
		var value = obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
		if( attr === 'opacity' ){
			value = Math.round(value*100);
		}

		return parseInt(value);

	}else{

		if( attr === 'opacity' ){
			obj.style.opacity = val/100;
			obj.style.filter = 'alpha(opacity='+value+')'
		}else{
			obj.style[attr] = val +'px';
		}

	}
};

Move.prototype.transformCss = function(obj,attr,val){
	if( !obj.transform ){
		obj.transform = {};
	}


	if( typeof val === 'undefined' ){
		if( typeof obj.transform[attr] === 'undefined' ){
			switch(attr){
				case 'scale':
				case 'scaleX':
				case 'scaleY':
				case 'scaleZ':
					obj.transform[attr] = 100;
					break;
				default:
					obj.transform[attr] = 0;
			}
		}
		return obj.transform[attr];
	}else{
		obj.transform[attr] = val;
		var transformVal = '';

		for( var s in obj.transform ){
			switch(s){
				case 'scale':
				case 'scaleX':
				case 'scaleZ':
				case 'scaleY':
					transformVal = ' '+s+'('+obj.transform[s]/100+')';
					break;
				case 'rotateX':
				case 'rotateY':
				case 'rotateZ':
				case 'rotate':
				case 'skewX':
				case 'skewY':
					transformVal = ' '+s+'('+(obj.transform[s])+'deg)';
					break;
				default:
					transformVal = ' '+s+'('+(obj.transform[s])+'px)';
			}
		}

		obj.style.WebkitTransform = obj.style.transform = transformVal;
	}
}

/*transform move*/
Move.prototype.startMove = function(obj,json,times,fx,fn){
	var a = 0;
	var b = {};
	var c = {};
	var d = times/20;
	var that = this;

	for( var s in json ){
		b[s] = that.css(obj,s);
		c[s] = json[s] - b[s];
	}

	obj.timer = setInterval(function(){
		a++;
		if( a > d ){
			clearInterval(obj.timer);
			fn&&fn.call(obj)
		}else{
			for( var s in json ){
				var val = Number((Tween[fx](a,b[s],c[s],d)).toFixed(2));
				that.css(obj,s,val);

			}	
		}

	},20)
	
};

var Tween = {
	linear: function (t, b, c, d){
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 2.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
};

export default move;