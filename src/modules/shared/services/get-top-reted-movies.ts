import type { MoviesResponse } from '@/modules/shared/types/movies-response'
import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'

export const getTopRatedMovies = async (page = 1) => {
	const url = `${baseUrlTmdb}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`

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
