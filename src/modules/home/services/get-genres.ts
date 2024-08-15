import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'
import type { GenresResponse } from '@/modules/home/types/genres'

export const getGenres = async () => {
	const url = `${baseUrlTmdb}/genre/movie/list?api_key=${apiKey}&language=en`

	try {
		const response = await fetch(url, { next: { revalidate: 60 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: GenresResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
