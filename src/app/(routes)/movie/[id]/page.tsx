import HeroSection from '@/modules/movie/components/hero/hero-section'
import { getMovieDetails } from '@/modules/movie/services/get-movie-details'

interface Props {
	params: { id: string }
}

const DetailMoviePage = async ({ params }: Props) => {
	const id = params.id
	const movieDetails = await getMovieDetails(Number(id))
	return (
		<>
			<HeroSection id={Number(id)} movieDetails={movieDetails} />
		</>
	)
}

export default DetailMoviePage
