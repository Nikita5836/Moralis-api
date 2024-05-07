'use client'

import { useGetWalletNFTsQuery } from '@/Redux/features/api'
import React, { useEffect } from 'react'

const Page = () => {
	const { data, isLoading, isError } = useGetWalletNFTsQuery('')

	useEffect(() => {
		console.log(data)
	}, [data])

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error</div>
	}

	return (
		<>
			{data?.map(item => (
				<li className='list-none' key={item.token_address}>
					<h2>{item.name}</h2>
					<img src={item.collection_logo} />
					<img src={item.collection_banner_image} />
				</li>
			))}
		</>
	)
}

export default Page
