import type { MovieVideosResponse } from '@/modules/movie/types/movie-video'
import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'

export const getTrailerMovie = async (idMovie: number) => {
	const url = `${baseUrlTmdb}/movie/${idMovie}/videos?api_key=${apiKey}&language=en-US`

	try {
		const response = await fetch(url, { next: { revalidate: 300 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MovieVideosResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
