import type { MoviesResponse } from '@/types/movies-response'
import { apiKey, baseUrlTmdb } from '@/utils/config'

export const getMoviesByGenres = async (idMovie: number, page = 1) => {
	const url = `${baseUrlTmdb}/discover/movie?api_key=${apiKey}&with_genres=${idMovie}&page=${page}`

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
