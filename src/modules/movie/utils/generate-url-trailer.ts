import { baseurlYoutube } from '@/modules/core/utils/config'
import { getTrailerMovie } from '@/modules/movie/services/get-trailer-movie'

export const generateUrlTrailer = async (idMovie: number) => {
	try {
		const response = await getTrailerMovie(Number(idMovie))

		const trailerVideo = response?.results.find(
			(video) => video.type === 'Trailer' && video.site === 'YouTube',
		)

		const urlTrailer = `${baseurlYoutube}?v=${trailerVideo?.key}`
		return urlTrailer
	} catch (error) {
		console.error(error)
	}
}
