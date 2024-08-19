import type { MovieInfo } from '@/modules/shared/types/movie-info'
import { baseUrlApi } from '@/modules/shared/utils/config'
import { auth } from '@clerk/nextjs/server'
import { cookies } from 'next/headers'

export const getFavoriteMovies = async () => {
	try {
		const { userId } = auth()
		const response = await fetch(`${baseUrlApi}/favorite-movies/${userId}`, {
			headers: {
				Cookie: cookies().toString(),
			},
			next: { revalidate: 60 },
		})
		const data: MovieInfo[] = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
