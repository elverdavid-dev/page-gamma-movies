import type { MoviesResponse } from '@/modules/shared/types/movies-response'
import { apiKey, baseUrl } from '@/modules/shared/utils/config'

export const getMoviesByGenres = async (idMovie: number) => {
	const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${idMovie}`

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
