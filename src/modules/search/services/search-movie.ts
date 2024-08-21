import type { MoviesResponse } from '@/modules/shared/types/movies-response'
import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'

export const searchMovies = async (query: string, page = 1, type = 'movie') => {
	const url = `${baseUrlTmdb}/search/${type}?api_key=${apiKey}&query=${query}&language=en-US&page=${page}&page_size=50`
	try {
		const response = await fetch(url, { next: { revalidate: 300 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MoviesResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
