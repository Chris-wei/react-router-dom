import  {useContext} from 'react';
import {pathToRegexp} from 'path-to-regexp';
import RouterContext from "./Context";

const Switch = (props) => {
	// 获取 pathname 路径
	const { location: { pathname } } = useContext(RouterContext);
	// 子组件
	const children = props.children;
	// 循环遍历进行匹配
	for ( let i = 0; i < children.length; i++ ) {
		// 子组件
		let child = children[i];
		// 子组件的路径（redirect 没有 path 属性）
		let path = child.props.path || '';
		// 路由正则
		let reg = pathToRegexp(path, [], { end: false });
		// 如果匹配成功
		if ( reg.test(pathname) ) return child;
	}
	// 匹配不成功
	return null;
}

export default Switch;
