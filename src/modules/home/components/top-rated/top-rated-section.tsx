import MoviesSection from '@/modules/core/components/movies-section'
import { getTopRatedMovies } from '@/modules/home/services/get-top-reted-movies'

const TopRatedSection = async () => {
	const topRatedMovies = await getTopRatedMovies()
	return (
		<MoviesSection
			title="Top Rated"
			seeMorePath="/top-rated"
			moviesData={topRatedMovies}
		/>
	)
}

export default TopRatedSection
