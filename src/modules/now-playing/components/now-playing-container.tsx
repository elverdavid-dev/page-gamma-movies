import PaginationWrapper from '@/modules/shared/components/common/pagination-wrapper'
import MoviesGrid from '@/modules/shared/components/movies/movies-grid'
import { getNowPlayingMovies } from '@/modules/shared/services/get-now-playing-movies'

interface Props {
	page: number
}

const NowPlayingContainer = async ({ page }: Props) => {
	const movies = await getNowPlayingMovies(page)

	return (
		<>
			<MoviesGrid
				movies={movies?.results ?? []}
				title="Now Playing"
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

export default NowPlayingContainer
