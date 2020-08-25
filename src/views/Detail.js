import React from 'react'

const Detail = (props)=>{
	return (
		<div className="wrapper">
			<h1 className='title'>我是带参数路由</h1>
			<div className=''>参数是 id ， 参数值 是 {props.match.params.id} </div>
		</div>
	)
}

export default Detail;
