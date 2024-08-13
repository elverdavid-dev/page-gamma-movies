import type { MoviesResponse } from '@/modules/shared/types/movies-response'
import { apiKey, baseUrl } from '@/modules/shared/utils/config'

export const getTrendingMovies = async () => {
	const url = `${baseUrl}/trending/movie/day?api_key=${apiKey}&language=en-US`
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
