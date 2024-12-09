import MoviesSection from '@/components/movies/sections/movies-section'
import { getPopularMovies } from '@/services/get-popular-movies'

const PopularSection = async () => {
	const popularMovies = await getPopularMovies()
	return (
		<MoviesSection
			title="Popular"
			seeMorePath="/popular"
			moviesData={popularMovies}
		/>
	)
}

export default PopularSection
