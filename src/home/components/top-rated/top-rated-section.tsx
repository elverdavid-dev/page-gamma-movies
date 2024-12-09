import MoviesSection from '@/components/movies/sections/movies-section'
import { getTopRatedMovies } from '@/services/get-top-reted-movies'

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
