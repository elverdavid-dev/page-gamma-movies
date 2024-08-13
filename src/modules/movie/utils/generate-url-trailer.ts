import { baseurlYoutube } from '@/modules/shared/utils/config'
import { getTrailerMovie } from '@/modules/movie/services/get-trailer-movie'

export const generateUrlTrailer = async (idMovie: number) => {
	try {
		const response = await getTrailerMovie(Number(idMovie))

		const trailerVideo = response?.results.find(
			(video) => video.type === 'Trailer' && video.site === 'YouTube',
		)
		const urlTrailer = `${baseurlYoutube}?v=${trailerVideo?.key}`
		if (!trailerVideo?.key) {
			return undefined
		}
		return urlTrailer
	} catch (error) {
		console.error(error)
	}
}
