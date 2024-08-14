import { cookies } from 'next/headers'
import type { FavoriteMovie } from '@/modules/favorite/types/favorite-movie'
import { auth } from '@clerk/nextjs/server'

const baseUrl = 'http://localhost:8080'
export const getFavoriteMovies = async () => {
	try {
		const { userId } = auth()
		const response = await fetch(`${baseUrl}/favorite-movies/${userId}`, {
			headers: {
				Cookie: cookies().toString(),
			},
			next: { revalidate: 60 },
		})
		const data: FavoriteMovie[] = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
