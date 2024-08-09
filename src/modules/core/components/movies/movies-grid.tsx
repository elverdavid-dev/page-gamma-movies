import MobileCard from '@/modules/core/components/card/mobile-card'
import MovieCard from '@/modules/core/components/card/movie-card'
import BackButton from '@/modules/core/components/common/back-button'
import { formatNumber } from '@/modules/core/utils/format-number'
import Link from 'next/link'
import type { Movie } from '@/modules/core/types/movie'

interface MoviesGridProps {
	movies: Movie[]
	title: string
	totalResults: number
}

const MoviesGrid = ({ movies, title, totalResults }: MoviesGridProps) => {
	return (
		<section className="mt-5 mx-2 lg:mx-3">
			<div className="flex items-center justify-between ">
				<BackButton path="/" label={title} />
				<span className="md:pr-5">
					<strong>{formatNumber(totalResults)}</strong> Total movies
				</span>
			</div>
			<section className="flex flex-col gap-y-5 md:grid md:grid-cols-5 md:gap-y-10 lg:grid-cols-8 mt-16">
				{movies.map(
					({
						id,
						title,
						poster_path,
						release_date,
						vote_average,
						overview,
					}) => (
						<Link key={id} href={`/movie/${id}`}>
							{/* Mobile Section */}
							<div className="md:hidden">
								<MobileCard
									title={title}
									poster_path={poster_path}
									release_date={release_date}
									vote_average={vote_average}
									overview={overview}
								/>
							</div>

							{/* Desktop section */}
							<div className="hidden md:block">
								<MovieCard
									title={title}
									poster_path={poster_path}
									release_date={release_date}
									vote_average={vote_average}
								/>
							</div>
						</Link>
					),
				)}
			</section>
		</section>
	)
}

export default MoviesGrid