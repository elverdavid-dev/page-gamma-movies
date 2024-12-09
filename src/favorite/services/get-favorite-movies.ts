import type { MovieInfo } from '@/types/movie-info'
import { baseUrlApi } from '@/utils/config'
import { auth } from '@clerk/nextjs/server'
import { cookies } from 'next/headers'

export const getFavoriteMovies = async () => {
	try {
		const { userId } = await auth()
		const response = await fetch(`${baseUrlApi}/favorite-movies/${userId}`, {
			headers: {
				Cookie: cookies().toString(),
			},
		})
		const data: MovieInfo[] = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
