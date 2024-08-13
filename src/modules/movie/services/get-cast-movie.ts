import { apiKey, baseUrl } from '@/modules/shared/utils/config'
import type { CastResponse } from '@/modules/movie/types/movie-cast'

export const getCastMovie = async (idMovie: number) => {
	const url = `${baseUrl}/movie/${idMovie}/credits?api_key=${apiKey}&language=en-US`
	try {
		const response = await fetch(url, { next: { revalidate: 60 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: CastResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
