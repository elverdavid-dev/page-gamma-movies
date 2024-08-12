import MobileCard from '@/modules/core/components/card/mobile-card'
import MovieCard from '@/modules/core/components/card/movie-card'
import Link from 'next/link'
import NotFoundSeach from './not-found-search'
import BackButton from '@/modules/core/components/common/back-button'
import { formatNumber } from '@/modules/core/utils/format-number'
import { searchMovies } from '../services/search-movie'
import PaginationWrapper from '@/modules/core/components/common/pagination-wrapper'
import { notFound } from 'next/navigation'
import FilterSection from './filter/filter-section'

interface Props {
	query: string
	page: number
}

const MoviesResult = async ({ query, page }: Props) => {
	const movies = await searchMovies(query, page)

	// Check if the requested page is greater than the total pages
	if (page > (movies?.total_pages ?? 1)) {
		// Redirect to 404 not found page
		notFound()
	}

	return (
		<section className="px-2 md:px-0  md:container md:mx-auto min-h-screen">
			<div className="flex items-center justify-between ">
				<BackButton path="/" label="Search" />
				<span className="md:pr-5">
					<strong>{formatNumber(movies?.total_results)}</strong> Total movies
				</span>
			</div>

			<section className="mt-5 mx-2 lg:mx-3">
				<FilterSection />
				{movies?.total_results === 0 ? (
					<NotFoundSeach />
				) : (
					<section className="flex flex-col gap-y-5 md:grid md:grid-cols-5 md:gap-y-10 lg:grid-cols-8 mt-5">
						{movies?.results.map(
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
				)}
			</section>
			<PaginationWrapper
				total={movies?.total_pages ?? 0}
				initialPage={1}
				page={page}
			/>
		</section>
	)
}

export default MoviesResult
