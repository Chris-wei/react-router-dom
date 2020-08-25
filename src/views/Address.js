import React from 'react'

const Address = (props)=>{
	console.log(props);
	return (
		<div className="wrapper">
			<h1 className='title'>我是二级路由</h1>
			<div className=''>我是 Profile 下的 Address 组件</div>
		</div>
	)
}

export default Address;
