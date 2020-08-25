import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import RouterContext from './Context';

const Link = (props) => {
	// 获取 push 方法
	const { history: { push } } = useContext(RouterContext);
	// 获取跳转路径
	const { to } = props;
	// 跳转
	return <a onClick={() => push(to)}>{props.children}</a>
}

Link.props = {
	to : PropTypes.func.isRequired
}

export default Link;
