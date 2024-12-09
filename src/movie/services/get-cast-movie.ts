import type { CastResponse } from '@/movie/types/movie-cast'
import { apiKey, baseUrlTmdb } from '@/utils/config'

export const getCastMovie = async (idMovie: number) => {
	const url = `${baseUrlTmdb}/movie/${idMovie}/credits?api_key=${apiKey}&language=en-US`
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: CastResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
