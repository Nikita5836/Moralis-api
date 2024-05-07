export interface ServerResponse<IResult> {
	status: string
	page: number
	cursor: string
	page_size: number
	result: IResult[]
}

export interface IResult {
	token_address: string
	possible_spam: boolean
	contract_type: string
	name?: string
	symbol?: string
	verified_collection: boolean
	collection_logo?: string
	collection_banner_image?: string
}
