import type { MovieDetail } from '@/modules/movie/types/movie-details'
import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'

export const getMovieDetails = async (idMovie: number) => {
	const url = `${baseUrlTmdb}/movie/${idMovie}?api_key=${apiKey}&language=en-US`

	try {
		const response = await fetch(url, { next: { revalidate: 300 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MovieDetail = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
