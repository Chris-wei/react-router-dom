import React from 'react';
import './App.css';

import Home from './views/Home'
import Category from './views/Category'
import Profile from './views/Profile'

import {HashRouter as Router, Link, Route,Redirect,Switch} from './react-router-dom'

function App () {
	return (
		<Router>
			<div className="App">
				<div className="nav">
					<div className="theme-title">自定义Router</div>
					<Link to={'/home'}>首页</Link>
					<Link to={'/category'}>分类</Link>
					<Link to={'/profile'}>我的</Link>
				</div>
				<div className="">
					<Switch>
						<Route path={'/home/1'} component={Home}/>
						<Route path={'/home'} exact={true} component={Home}/>
						<Route path={'/category'} component={Category}/>
						<Route path={'/profile'} component={Profile}/>
						<Redirect to={'/home'} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
