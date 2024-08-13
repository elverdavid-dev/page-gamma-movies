import MoviesSection from '@/modules/shared/components/movies/sections/movies-section'
import { getNowPlayingMovies } from '@/modules/shared/services/get-now-playing-movies'

const NowPlayingSection = async () => {
	const nowPlayingMovies = await getNowPlayingMovies()

	return (
		<MoviesSection
			title="Now Playing"
			seeMorePath="/now-playing"
			moviesData={nowPlayingMovies}
		/>
	)
}

export default NowPlayingSection
