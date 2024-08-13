import PaginationWrapper from '@/modules/shared/components/common/pagination-wrapper'
import MoviesGrid from '@/modules/shared/components/movies/sections/movies-grid'
import { getPopularMovies } from '@/modules/shared/services/get-popular-movies'
import { notFound } from 'next/navigation'

interface Props {
	page: number
}
const PopularContainer = async ({ page }: Props) => {
	const movies = await getPopularMovies(page)

	// Check if the requested page is greater than the total pages
	if (page > (movies?.total_pages ?? 1)) {
		// Redirect to 404 not found page
		notFound()
	}
	return (
		<>
			<MoviesGrid
				movies={movies?.results ?? []}
				title="Popular"
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

export default PopularContainer
