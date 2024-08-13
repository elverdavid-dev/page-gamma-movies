import MoviesSection from '@/modules/core/components/movies-section'
import { getUpcomingMovies } from '@/modules/core/services/get-upcoming-movies'

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
