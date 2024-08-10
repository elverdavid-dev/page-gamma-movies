import type { MoviesResponse } from '@/modules/core/types/movies-response'
import { apiKey, baseUrl } from '@/modules/core/utils/config'

export const searchMovies = async (name: string) => {
	const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${name}&language=en-US&page=1`
	try {
		const response = await fetch(url, { next: { revalidate: 60 } })
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data: MoviesResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

//search/movie?query=deadpool&include_adult=false&language=en-US&page=1
