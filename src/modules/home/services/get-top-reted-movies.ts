import type { MoviesResponse } from '@/modules/core/types/movies-response'
import { apiKey, baseUrl } from '@/modules/core/utils/config'

export const getTopRatedMovies = async (page = 1) => {
	const url = `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`

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
