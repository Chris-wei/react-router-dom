import {useContext, useEffect} from 'react'
import PropTypes from 'prop-types';
import RouterContext from "./Context";

const Redirect = (props) => {
	// 获取 push 方法
	const { history: { push } } = useContext(RouterContext);
	// 获取跳转路径
	const { to } = props;
	// 重定向跳转
	useEffect(() => {
		push(to);
	}, [push, to]);
	// 不渲染
	return null;
}

Redirect.props = {
	to: PropTypes.func.isRequired
}

export default Redirect;
