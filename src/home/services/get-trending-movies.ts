import type { MoviesResponse } from '@/types/movies-response'
import { apiKey, baseUrlTmdb } from '@/utils/config'

export const getTrendingMovies = async () => {
	const url = `${baseUrlTmdb}/trending/movie/day?api_key=${apiKey}&language=en-US`
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MoviesResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
