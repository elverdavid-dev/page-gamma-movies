import MovieCard from '@/modules/core/components/card/movie-card'
import SeeMoreButton from '@/modules/core/components/common/see-more-button'
import Subtitle from '@/modules/core/components/common/subtitle'
import type { MoviesResponse } from '@/modules/core/types/movies-response'
import type { Movie } from '@/modules/core/types/movie'
import Link from 'next/link'

interface Props {
	title: string
	moviesData: MoviesResponse | undefined
	seeMorePath: string
}

const MoviesSection = async ({ title, moviesData, seeMorePath }: Props) => {
	return (
		<section className="mt-16 container mx-auto">
			<div className="flex items-center justify-between">
				<Subtitle text={title} />
				<SeeMoreButton path={seeMorePath} />
			</div>
			<div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
				{moviesData?.results.map((movie: Movie) => (
					<Link href={`/movie/${movie.id}`} key={movie.id}>
						<MovieCard
							title={movie.title}
							poster_path={movie.poster_path}
							release_date={movie.release_date}
							vote_average={movie.vote_average}
						/>
					</Link>
				))}
			</div>
		</section>
	)
}

export default MoviesSection
