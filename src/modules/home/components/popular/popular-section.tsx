import MoviesSection from '@/modules/shared/components/movies-section'
import { getPopularMovies } from '@/modules/shared/services/get-popular-movies'

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
