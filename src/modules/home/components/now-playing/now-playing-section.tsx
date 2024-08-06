import MoviesSection from '@/modules/core/components/movies-section'
import { getNowPlayingMovies } from '@/modules/home/services/get-now-playing-movies'

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
