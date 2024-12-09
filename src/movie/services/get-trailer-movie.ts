import type { MovieVideosResponse } from '@/movie/types/movie-video'
import { apiKey, baseUrlTmdb } from '@/utils/config'

export const getTrailerMovie = async (idMovie: number) => {
	const url = `${baseUrlTmdb}/movie/${idMovie}/videos?api_key=${apiKey}&language=en-US`

	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MovieVideosResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
