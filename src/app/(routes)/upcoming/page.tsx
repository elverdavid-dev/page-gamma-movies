import MoviesGrid from '@/modules/core/components/movies/movies-grid'
import { getUpcomingMovies } from '@/modules/home/services/get-upcoming-movies'

const UpcomingPage = async () => {
	const movies = await getUpcomingMovies()
	return (
		<MoviesGrid
			movies={movies?.results ?? []}
			title="Upcoming"
			totalResults={movies?.total_results ?? 0}
		/>
	)
}

export default UpcomingPage
