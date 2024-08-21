import HeroSection from '@/modules/movie/components/hero/hero-section-movie'
import { getDetails } from '@/modules/movie/services/get-movie-details'
import { createMetadata } from '@/modules/shared/utils/create-metadata'
import { notFound } from 'next/navigation'

interface Props {
	params: { id: string }
}

export const generateMetadata = async ({ params }: Props) => {
	const id = params.id
	const movie = await getDetails({ id_movie: Number(id), type: 'movie' })
	return createMetadata({
		title: movie?.title ?? 'Details movie',
		description: movie?.overview,
		ogImg: movie?.poster_path,
		canonicalUrl: `/movie/${id}`,
	})
}

const DetailMoviePage = async ({ params }: Props) => {
	const id = params.id
	const movieDetails = await getDetails({ id_movie: Number(id), type: 'movie' })
	if (!movieDetails) {
		notFound()
	}
	return (
		<>
			<HeroSection id={Number(id)} movieDetails={movieDetails} />
		</>
	)
}

export default DetailMoviePage
