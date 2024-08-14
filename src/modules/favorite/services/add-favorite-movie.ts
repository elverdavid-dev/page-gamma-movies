'use server'
import { cookies } from 'next/headers'
import type { FavoriteMovie } from '@/modules/favorite/types/favorite-movie'

interface MessageResponse {
	message: string
}

const baseUrl = 'http://localhost:8080'
export const addFavoriteMovies = async (favoriteMovie: FavoriteMovie) => {
	try {
		const response = await fetch(`${baseUrl}/favorite-movies`, {
			method: 'POST',
			headers: {
				Cookie: cookies().toString(),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(favoriteMovie),
		})
		const data: MessageResponse = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
