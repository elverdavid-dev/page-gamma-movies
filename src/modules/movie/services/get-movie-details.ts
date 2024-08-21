import type { MovieDetail } from '@/modules/movie/types/movie-details'
import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'

interface Params {
	id_movie: number
	type?: string
}

export const getDetails = async ({ id_movie, type = 'movie' }: Params) => {
	const url = `${baseUrlTmdb}/${type}/${id_movie}?api_key=${apiKey}&language=en-US`

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
