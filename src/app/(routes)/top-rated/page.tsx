import MoviesGrid from '@/modules/core/components/movies/movies-grid'
import { getTopRatedMovies } from '@/modules/home/services/get-top-reted-movies'

const TopRatedPage = async () => {
	const movies = await getTopRatedMovies()
	return (
		<MoviesGrid
			movies={movies?.results ?? []}
			title="Top Rated"
			totalResults={movies?.total_results ?? 0}
		/>
	)
}

export default TopRatedPage
