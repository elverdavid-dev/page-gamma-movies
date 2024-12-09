import MobileCard from '@/components/card/mobile-card'
import MovieCard from '@/components/card/movie-card'
import BackButton from '@/components/common/back-button'
import { getFavoriteMovies } from '@/favorite/services/get-favorite-movies'
import Link from 'next/link'
import NotFoundFavoriteMovies from './not-found-favorite-movies'

const FavoriteContainer = async () => {
	const movies = await getFavoriteMovies()
	return (
		<>
			{movies?.length === 0 ? (
				<NotFoundFavoriteMovies />
			) : (
				<section className="mt-5 mx-2 lg:mx-3">
					<div className="flex items-center justify-between ">
						<BackButton path="/" label="Favorite" />
						<span className="md:pr-5">
							<strong>{movies?.length}</strong> Total movies
						</span>
					</div>
					<section className="flex flex-col gap-y-5 md:grid md:grid-cols-5 md:gap-y-10 lg:grid-cols-8 mt-16">
						{movies?.map(
							({
								movie_id,
								title,
								poster_path,
								release_date,
								vote_average,
								overview,
							}) => (
								<Link key={movie_id} href={`/movie/${movie_id}`}>
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
			)}
		</>
	)
}

export default FavoriteContainer
