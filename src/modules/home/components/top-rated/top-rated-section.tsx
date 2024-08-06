import MovieCard from '@/modules/core/components/card/movie-card'
import SeeMoreButton from '@/modules/core/components/common/see-more-button'
import Subtitle from '@/modules/core/components/common/subtitle'
import { getTopRatedMovies } from '@/modules/home/services/get-top-reted-movies'

const TopRatedSection = async () => {
	const topRatedMovies = await getTopRatedMovies()
	return (
		<section className="container mx-auto">
			<div className="flex items-center justify-between">
				<Subtitle text="Top Rated" />
				<SeeMoreButton path="/top-reted" />
			</div>
			<div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
				{topRatedMovies?.results.map((movie) => (
					<MovieCard
						title={movie.title}
						poster_path={movie.poster_path}
						release_date={movie.release_date}
						vote_average={movie.vote_average}
						key={movie.id}
					/>
				))}
			</div>
		</section>
	)
}

export default TopRatedSection
