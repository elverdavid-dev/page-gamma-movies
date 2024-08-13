import PaginationWrapper from '@/modules/shared/components/common/pagination-wrapper'
import MoviesGrid from '@/modules/shared/components/movies/movies-grid'
import { getUpcomingMovies } from '@/modules/shared/services/get-upcoming-movies'
import { notFound } from 'next/navigation'

interface Props {
	page: number
}

const UpcomingContainer = async ({ page }: Props) => {
	const movies = await getUpcomingMovies(page)

	// Check if the requested page is greater than the total pages
	if (page > (movies?.total_pages ?? 1)) {
		// Redirect to 404 not found page
		notFound()
	}
	return (
		<>
			<MoviesGrid
				movies={movies?.results ?? []}
				title="Upcoming"
				totalResults={movies?.total_results ?? 0}
			/>
			<PaginationWrapper
				total={movies?.total_pages ?? 1}
				page={page}
				initialPage={1}
			/>
		</>
	)
}

export default UpcomingContainer
