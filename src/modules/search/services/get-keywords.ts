import { apiKey, baseUrl } from '@/modules/core/utils/config'
import type { KeywordResponse } from '@/modules/search/types/keyword'

export const getKeywords = async (keyword: string) => {
	const url = `${baseUrl}/search/keyword?api_key=${apiKey}&query=${keyword}&page=1`
	try {
		const response = await fetch(url, { next: { revalidate: 60 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: KeywordResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
