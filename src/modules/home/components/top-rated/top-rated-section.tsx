import MoviesSection from '@/modules/shared/components/movies-section'
import { getTopRatedMovies } from '@/modules/shared/services/get-top-reted-movies'

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
