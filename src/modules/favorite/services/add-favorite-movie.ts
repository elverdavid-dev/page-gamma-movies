'use server'
import type { MovieInfo } from '@/modules/shared/types/movie-info'
import { baseUrlApi } from '@/modules/shared/utils/config'
import { cookies } from 'next/headers'

interface MessageResponse {
	message: string
}

export const addFavoriteMovies = async (favoriteMovie: MovieInfo) => {
	try {
		const response = await fetch(`${baseUrlApi}/favorite-movies`, {
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
