import React from 'react'
import {Link, Route} from '../react-router-dom'
import Address from './Address'
import Collection from './Collection'
import Detail from "./Detail";

const Profile = () => {
	return (
		<div className="wrapper">
			<h1 className='title'>我是自定义 Profile 组件</h1>
			<h4 className='sub-title'>二级路由展示</h4>
			<div className="container">
				<div className="router-link">
					<Link to={'/profile/address'}>
						<div className="link">地址管理</div>
					</Link>
					<Link to={'/profile/collection'}>
						<div className="link">我的收藏</div>
					</Link>
					<Link to={'/profile/detail/1'}>
						<div className="link">参数路由</div>
					</Link>
				</div>
				<div className="router-wrapper">
					<Route path={'/profile/address'} component={Address}/>
					<Route path={'/profile/collection'} component={Collection}/>
					<Route path={'/profile/detail/:id'} component={Detail}/>
				</div>
			</div>

		</div>
	)
}

export default Profile;
