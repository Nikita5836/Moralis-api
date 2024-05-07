import { IResult, ServerResponse } from '@/models/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://deep-index.moralis.io/api/v2.2/:address/',
		prepareHeaders: headers => {
			headers.set(
				'x-api-key',
				`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjBhOWZhZTkzLTNhMjEtNDY5MC1iMmJiLWFmM2ZjOTkyMTZjMiIsIm9yZ0lkIjoiMzkxMDk5IiwidXNlcklkIjoiNDAxODcwIiwidHlwZUlkIjoiYTk4MWZmZWEtNTdjNS00MThlLTliNDYtZTAwZWNjNmY3ZTBhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTQ5OTIyMjcsImV4cCI6NDg3MDc1MjIyN30.OqDhQaZD68vNRFc0B4hU9h1CBA9OcJ2fQs5i8QCfPGk`
			)
			return headers
		},
	}),
	endpoints: builder => ({
		getWalletNFTs: builder.query<IResult[], string>({
			query: () => ({
				url: 'nft/collections',
				params: {
					chain: '0x1',
					format: 'decimal',
					mediaItems: false,
					address: '0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e',
				},
			}),
			transformResponse: (response: ServerResponse<IResult>) => response.result,
		}),
	}),
})

export const { useGetWalletNFTsQuery } = api
