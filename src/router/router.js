import React from 'react';
import {HashRouter, Route,Redirect,Switch,Link,NavLink} from 'react-router-dom';

import Bundle from './Bundle.js';

import Index from 'bundle-loader?lazy&name=index!pages/index/index.js';
import Invite from 'bundle-loader?lazy&name=invite!pages/invite/invite.js';
import Member from 'bundle-loader?lazy&name=member!pages/member/member.js';
import Footer from 'component/footer/footer.js';
import ActivityDetail from 'bundle-loader?lazy&name=activity-deatil!component/activity-detail/activity-deatil.js';
import FoodDetail from 'bundle-loader?lazy&name=food-detail!component/food-detail/food-deatil.js';
import StoreDetail from  'bundle-loader?lazy&name=store-detail!component/store-detail/store-detail.js';
import SelectDetail from  'bundle-loader?lazy&name=select-detail!component/select-detail/select-detail.js';
import FaceParty from 'bundle-loader?lazy&name=face-party!component/face-party/face-party.js';
import Collect from 'bundle-loader?lazy&name=collect!component/collect/collect.js';
import StartParty from 'bundle-loader?lazy&name=start-party!component/start-party/start-party.js';
import Coupon from 'bundle-loader?lazy&name=coupon!component/coupon/coupon.js';
import MemberRights from 'bundle-loader?lazy&name=member-rights!component/member-rights/member-rights.js';
import QR from 'bundle-loader?lazy&name=QR!component/QR/QR.js';
import PartyRecord from 'bundle-loader?lazy&name=party-record!component/party-record/party-record.js';
import DealRecord from 'bundle-loader?lazy&name=activity-deatil!component/deal-record/deal-record.js';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

const Router = () =>(
	<HashRouter>
		<div>
			<Switch>
				<Redirect exact from="/" to="/index"/>
				<Route exact path="/index" component={createComponent(Index)}/ >
				<Route exact path="/invite" component= {createComponent(Invite)}/ >
				<Route exact path="/member" component={createComponent(Member)} / >
				<Route path="/index/activity-detail/:index" component={createComponent(ActivityDetail)} / >
				<Route path="/index/food-detail/:index" component={createComponent(FoodDetail)} / >
				<Route path="/index/store-detail/:index" component={createComponent(StoreDetail)} / >
				<Route path="/index/select-detail" component={createComponent(SelectDetail)} / >
				<Route path="/invite/face-party" component={createComponent(FaceParty)} / >
				<Route path="/member/collect" component={createComponent(Collect)} / >
				<Route path="/invite/start-party" component={createComponent(StartParty)} / >
				<Route path="/member/coupon" component={createComponent(Coupon)} / >
				<Route path="/member/member-rights" component={createComponent(MemberRights)} / >
				<Route path="/member/QR" component={createComponent(QR)} / >
				<Route path="/member/party-record" component={createComponent(PartyRecord)} / >
				<Route path="/member/deal-record" component={createComponent(DealRecord)} / >
			</Switch>
			<Footer/>
		</div>
	</HashRouter>
)

export default Router;