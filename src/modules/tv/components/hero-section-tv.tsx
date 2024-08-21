import { generateUrlTrailer } from '@/modules/movie/utils/generate-url-trailer'
import { baseUrlImage } from '@/modules/shared/utils/config'
import TvHeroDetails from '@/modules/tv/components/tv-details-hero'
import type { TvShowDetails } from '@/modules/tv/types/tv-show'

interface Props {
	id: number
	tvDetails: TvShowDetails | undefined
}

const HeroSectionTV = async ({ id, tvDetails }: Props) => {
	const urlTrailer = await generateUrlTrailer(Number(id))
	return (
		<section className="relative">
			{tvDetails?.backdrop_path ? (
				<img
					src={`${baseUrlImage}/${tvDetails?.backdrop_path}`}
					alt={`movie ${tvDetails?.name}`}
					className="absolute h-full md:static md:h-[569px] w-full object-cover -z-10"
				/>
			) : (
				<div className="absolute h-full md:static md:h-[569px] w-full -z-10" />
			)}
			<div
				className="absolute inset-0 w-full bg-gradient-to-t  from-black via-black/80  to-black/65 -z-10 md:z-0"
				aria-hidden="true"
			/>
			<TvHeroDetails
				urlTrailer={urlTrailer}
				name={tvDetails?.name}
				first_air_date={tvDetails?.first_air_date}
				genres={tvDetails?.genres}
				number_of_episodes={tvDetails?.number_of_episodes}
				overview={tvDetails?.overview}
				poster_path={tvDetails?.poster_path}
				vote_average={tvDetails?.vote_average}
			/>
		</section>
	)
}

export default HeroSectionTV
