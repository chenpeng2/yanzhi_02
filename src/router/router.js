import React from 'react';
import Index from '../containers/Index';
import ReMen from '../containers/ReMen';
import XieHou from '../containers/XieHou';
import PiaoXuan from '../containers/PiaoXuan';
import HUaTi from '../containers/HUaTi';
import NotFound from '../containers/NotFound';
import {Router, Route,hashHistory,Redirect} from 'react-router';
export default class Root extends React.Component {
	render() {
		return (
				<Router history={hashHistory}>
					<Route path="/" component={Index}></Route>
						<Route path="/remen" component={ReMen}></Route>
						<Route path="/xiehou" component={XieHou}></Route>
						<Route path="/piaoxuan" component={PiaoXuan}></Route>
						<Route path="/huati" component={HUaTi}></Route>
						<Route path='/404' component={NotFound} />
						<Redirect from='*' to='/404'/>
				</Router>
		);
	};
}
