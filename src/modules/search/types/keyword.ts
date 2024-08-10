export interface Keyword {
	id: number
	name: string
}

export interface KeywordResponse {
	page: number
	results: Keyword[]
	total_pages: number
	total_results: number
}
