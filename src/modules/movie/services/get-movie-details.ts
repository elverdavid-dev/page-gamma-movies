import { apiKey, baseUrl } from '@/modules/shared/utils/config'
import type { MovieDetail } from '@/modules/movie/types/movie-details'

export const getMovieDetails = async (idMovie: number) => {
	const url = `${baseUrl}/movie/${idMovie}?api_key=${apiKey}&language=en-US`

	try {
		const response = await fetch(url, { next: { revalidate: 60 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MovieDetail = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
