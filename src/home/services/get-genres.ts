import type { GenresResponse } from '@/home/types/genres'
import { apiKey, baseUrlTmdb } from '@/utils/config'

export const getGenres = async () => {
	const url = `${baseUrlTmdb}/genre/movie/list?api_key=${apiKey}&language=en`

	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: GenresResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
