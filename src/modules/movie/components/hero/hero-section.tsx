import { baseUrlImage } from '@/modules/core/utils/config'
import MovieInfoHero from '@/modules/movie/components/hero/movie-info-hero'
import { generateUrlTrailer } from '@/modules/movie/utils/generate-url-trailer'
import type { MovieDetail } from '@/modules/movie/types/movie-details'

interface Props {
	id: number
	movieDetails: MovieDetail | undefined
}

const HeroSection = async ({ id, movieDetails }: Props) => {
	const urlTrailer = await generateUrlTrailer(Number(id))
	return (
		<section className="relative">
			<img
				src={`${baseUrlImage}/${movieDetails?.backdrop_path}`}
				alt={`movie ${movieDetails?.title}`}
				className="absolute h-full md:static md:h-[561px] w-full object-cover -z-10"
			/>
			<div
				className="absolute inset-0 w-full bg-gradient-to-t  from-black via-black/80  to-black/65 -z-10 md:z-0"
				aria-hidden="true"
			/>
			<MovieInfoHero movieDetails={movieDetails} urlTrailer={urlTrailer} />
		</section>
	)
}

export default HeroSection
