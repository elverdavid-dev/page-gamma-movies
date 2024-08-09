import MoviesGrid from '@/modules/core/components/movies/movies-grid'
import { getNowPlayingMovies } from '@/modules/home/services/get-now-playing-movies'

const NowPlayingPage = async () => {
	const movies = await getNowPlayingMovies()
	return (
		<MoviesGrid
			movies={movies?.results ?? []}
			title="Now Playing"
			totalResults={movies?.total_results ?? 0}
		/>
	)
}

export default NowPlayingPage
