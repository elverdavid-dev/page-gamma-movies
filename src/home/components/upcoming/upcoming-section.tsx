import MoviesSection from '@/components/movies/sections/movies-section'
import { getUpcomingMovies } from '@/services/get-upcoming-movies'

const UpcomingSection = async () => {
	const upcomingMovies = await getUpcomingMovies()
	return (
		<MoviesSection
			title="Upcoming"
			seeMorePath="/upcoming"
			moviesData={upcomingMovies}
		/>
	)
}

export default UpcomingSection
