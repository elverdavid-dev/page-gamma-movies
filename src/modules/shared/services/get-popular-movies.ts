import type { MoviesResponse } from '@/modules/shared/types/movies-response'
import { apiKey, baseUrl } from '@/modules/shared/utils/config'

export const getPopularMovies = async (page = 1) => {
	const url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`

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
