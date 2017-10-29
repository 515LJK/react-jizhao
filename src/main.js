/*main.js*/
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store.js';

import './common/css/common.css';
import './common/js/common.js';

import Router from 'router/router.js';

//初始化
renderWithHotReload(Router());

if(module.hot){
	module.hot.accept('router/router.js',()=>{
		const Router = require('router/router.js').default;
		renderWithHotReload(Router());
	});
};


function renderWithHotReload(RootElement){
	ReactDom.render(
		<AppContainer>
			<Provider store={store}>	
				{RootElement}
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
}