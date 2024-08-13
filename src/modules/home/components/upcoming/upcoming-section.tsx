import MoviesSection from '@/modules/shared/components/movies-section'
import { getUpcomingMovies } from '@/modules/shared/services/get-upcoming-movies'

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
