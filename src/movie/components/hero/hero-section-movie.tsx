import MovieInfoHero from '@/movie/components/hero/movie-info-hero'
import type { MovieDetail } from '@/movie/types/movie-details'
import { generateUrlTrailer } from '@/movie/utils/generate-url-trailer'
import { baseUrlImage } from '@/utils/config'

interface Props {
	id: number
	movieDetails: MovieDetail | undefined
}

const HeroSectionMovie = async ({ id, movieDetails }: Props) => {
	const urlTrailer = await generateUrlTrailer(Number(id))
	return (
		<section className="relative black-overlay">
			{movieDetails?.backdrop_path ? (
				<img
					src={`${baseUrlImage}/${movieDetails?.backdrop_path}`}
					alt={`movie ${movieDetails?.title}`}
					className="absolute h-full md:static md:h-[569px] w-full object-cover -z-10"
				/>
			) : (
				<div className="absolute h-full md:static md:h-[569px] w-full -z-10" />
			)}

			<MovieInfoHero movieDetails={movieDetails} urlTrailer={urlTrailer} />
		</section>
	)
}

export default HeroSectionMovie
