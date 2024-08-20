import type { CastResponse } from '@/modules/movie/types/movie-cast'
import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'

export const getCastMovie = async (idMovie: number) => {
	const url = `${baseUrlTmdb}/movie/${idMovie}/credits?api_key=${apiKey}&language=en-US`
	try {
		const response = await fetch(url, { next: { revalidate: 300 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: CastResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
