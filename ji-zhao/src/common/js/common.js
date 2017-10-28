(function(){
	//设置html字体大小
	var html = document.documentElement;
	var iWidth = html.getBoundingClientRect().width;
	html.style.fontSize = iWidth/18.75+'px';
})()