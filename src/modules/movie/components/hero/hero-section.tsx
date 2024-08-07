import { baseUrlImage } from '@/modules/core/utils/config'
import { getMovieDetails } from '@/modules/movie/services/get-movie-details'
import MovieInfoHero from '@/modules/movie/components/hero/movie-info-hero'
import { generateUrlTrailer } from '@/modules/movie/utils/generate-url-trailer'

interface Props {
	id: number
}

const HeroSection = async ({ id }: Props) => {
	const movieDetails = await getMovieDetails(Number(id))
	const urlTrailer = await generateUrlTrailer(Number(id))
	return (
		<section className="relative">
			<img
				src={`${baseUrlImage}/${movieDetails?.backdrop_path}`}
				alt=""
				className="h-[561px] w-full object-cover"
			/>
			<div
				className="absolute inset-0 bg-gradient-to-t  from-black via-black/80  to-black/65 z-10"
				aria-hidden="true"
			/>
			<MovieInfoHero movieDetails={movieDetails} urlTrailer={urlTrailer} />
		</section>
	)
}

export default HeroSection
