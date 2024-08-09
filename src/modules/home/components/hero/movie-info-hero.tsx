import VoteAverage from '@/modules/core/components/vote-average'
import type { Movie } from '@/modules/core/types/movie'
import { Bookmark02Icon, FavouriteIcon, Share08Icon } from 'hugeicons-react'
import Link from 'next/link'

interface Props {
	movie: Movie
}
const MovieInfoHero = ({ movie }: Props) => {
	return (
		<section className="absolute bottom-0 inset-x-0 z-20 p-5 container mx-auto text-white">
			<Link href={`/movie/${movie.id}`}>
				<div className="md:flex md:items-center md:justify-between">
					<article>
						<h2 className="text-5xl font-ibmPlexSans text-white text-balance">
							{movie.title}
						</h2>
						<p className="text-pretty md:w-3/4 py-3 text-gray-300 text-lg">
							{movie.overview}
						</p>
					</article>

					{/* Vote Average*/}

					{movie.vote_average !== 0 && (
						<VoteAverage
							voteAverage={movie.vote_average}
							size="lg"
							classNames={{
								svg: 'w-20 h-20 drop-shadow-md',
								track: 'stroke-white/10',
								value: 'text-xl font-semibold text-white',
							}}
							aria-label={`Vote average for ${movie.title} is ${movie.vote_average}`}
						/>
					)}
				</div>
			</Link>
			{/* Actions */}

			<div className="flex items-center gap-x-10 justify-end pb-3">
				<button
					type="button"
					className="active:scale-90 transition-all"
					aria-label="Add to favorites"
				>
					<FavouriteIcon />
				</button>

				<button
					type="button"
					className="active:scale-90 transition-all"
					aria-label="Bookmark this movie"
				>
					<Bookmark02Icon />
				</button>

				<button
					type="button"
					className="active:scale-90 transition-all"
					aria-label="Share this movie"
				>
					<Share08Icon />
				</button>
			</div>
		</section>
	)
}

export default MovieInfoHero
