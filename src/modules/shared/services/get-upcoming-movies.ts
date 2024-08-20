import type { MoviesResponse } from '@/modules/shared/types/movies-response'
import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'

export const getUpcomingMovies = async (page = 1) => {
	const url = `${baseUrlTmdb}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`

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
