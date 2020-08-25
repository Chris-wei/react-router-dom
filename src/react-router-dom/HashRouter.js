import React, {useEffect, useState} from 'react';
import RouterContext from './Context';

const HashRouter = (props) => {

	// location 信息
	const [location, setLocation] = useState({
		pathname: window.location.hash.slice(1) || '/'
	})

	// hash 变化处理函数
	const onHashChange = () => {
		setLocation((location) => ({
			...location,
			pathname: window.location.hash.slice(1) || '/'
		}))
	}

	useEffect(() => {
		// 初始化路由信息
		window.location.hash = window.location.hash || '/';
		// 监控 hash 变化
		window.addEventListener('hashchange', onHashChange, false)
	}, [])

	// 传递给子组件
	const value = {
		location,
		history : {
			push(to){
				window.location.hash = to;
			}
		}
	}
	return <RouterContext.Provider value={value}>
		{props.children}
	</RouterContext.Provider>
}

export default HashRouter;
