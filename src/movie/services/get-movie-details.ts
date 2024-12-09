import type { MovieDetail } from '@/movie/types/movie-details'
import { apiKey, baseUrlTmdb } from '@/utils/config'

interface Params {
	id_movie: number
	type?: string
}

export const getDetails = async ({ id_movie, type = 'movie' }: Params) => {
	const url = `${baseUrlTmdb}/${type}/${id_movie}?api_key=${apiKey}&language=en-US`

	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MovieDetail = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
