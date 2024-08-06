import MoviesSection from '@/modules/core/components/movies-section'
import { getPopularMovies } from '@/modules/home/services/get-popular-movies'

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
