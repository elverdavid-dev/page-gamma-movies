import { getMoviesByGenres } from '@/modules/genre/services/get-movies-by-genres'
import PaginationWrapper from '@/modules/shared/components/common/pagination-wrapper'
import MoviesGrid from '@/modules/shared/components/movies/sections/movies-grid'
import { notFound } from 'next/navigation'

interface Props {
	idMovie: number
	genreName?: string
	page: number
}
const GenreContainer = async ({ idMovie, genreName, page }: Props) => {
	const movies = await getMoviesByGenres(idMovie, page)
	// Check if the requested page is greater than the total pages
	if (page > (movies?.total_pages ?? 1)) {
		// Redirect to 404 not found page
		notFound()
	}
	return (
		<>
			<MoviesGrid
				movies={movies?.results ?? []}
				title={genreName ?? 'Genre'}
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

export default GenreContainer
