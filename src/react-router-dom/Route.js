import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import RouterContext from './Context';
import {pathToRegexp} from 'path-to-regexp';

const Route = (props) => {
	// 获取 pathname 路径
	const { location: { pathname } } = useContext(RouterContext);
	// 获取 path 和 Component 属性
	const { path, component: Component, exact = false } = props;
	// path 转正则进行匹配
	let keys = [];
	let reg = pathToRegexp(path, keys, { end: exact });
	// 判断路径是否匹配，匹配返回对应的组件
	let result = pathname.match(reg);
	let [url, ...values] = result || [];
	// 传递给子组件的数据
	const { location, history } = useContext(RouterContext);
	const componentProps = {
		location,
		history,
		match: {
			path: pathname,
			params: keys.reduce((obj, current, idx) => {
				obj[current['name']] = values[idx]
				return obj;
			}, {}),
			url
		}
	}
	if ( result ) return <Component {...componentProps}/>;
	// 不匹配返回 null
	return null;
}

Route.props = {
	path: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired
}

export default Route;
