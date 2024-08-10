import type { MoviesResponse } from '@/modules/core/types/movies-response'
import { apiKey, baseUrl } from '@/modules/core/utils/config'

export const getMoviesByKeyword = async (keywordId: string) => {
	const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_keywords=${keywordId}`
	try {
		const response = await fetch(url, { next: { revalidate: 60 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MoviesResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
