import PaginationWrapper from '@/modules/shared/components/common/pagination-wrapper'
import MoviesGrid from '@/modules/shared/components/movies/sections/movies-grid'
import { getTopRatedMovies } from '@/modules/shared/services/get-top-reted-movies'

interface Props {
	page: number
}
const TopRatedContainer = async ({ page }: Props) => {
	const movies = await getTopRatedMovies(page)

	return (
		<>
			<MoviesGrid
				movies={movies?.results ?? []}
				title="Top Rated"
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

export default TopRatedContainer
