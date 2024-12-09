import Subtitle from '@/components/common/subtitle'
import CardCast from '@/movie/components/cast/card-cast'
import { getCastMovie } from '@/movie/services/get-cast-movie'

interface Props {
	idMovie: number
}

const CastSection = async ({ idMovie }: Props) => {
	const castMovie = await getCastMovie(idMovie)

	return (
		<section className="mt-16 container mx-auto flex-1 w-3/4">
			<Subtitle text="Cast" />
			<div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
				{castMovie?.cast.map((cast) => (
					<CardCast cast={cast} key={cast.id} />
				))}
			</div>
		</section>
	)
}

export default CastSection
