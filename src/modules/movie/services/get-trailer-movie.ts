import { apiKey, baseUrl } from '@/modules/shared/utils/config'
import type { MovieVideosResponse } from '@/modules/movie/types/movie-video'

export const getTrailerMovie = async (idMovie: number) => {
	const url = `${baseUrl}/movie/${idMovie}/videos?api_key=${apiKey}&language=en-US`

	try {
		const response = await fetch(url, { next: { revalidate: 60 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MovieVideosResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
