import BackButton from '@/modules/core/components/common/back-button'
import MoviesResult from '@/modules/search/components/movies-result'
import { searchMovies } from '@/modules/search/services/search-movie'
import { Suspense } from 'react'

interface Props {
	searchParams: { [key: string]: string | undefined }
}

const SearchPage = async ({ searchParams }: Props) => {
	const query = searchParams.q
	const movies = await searchMovies(query ?? '')
	console.log(movies)
	return (
		<section className="px-2 md:px-0  md:container md:mx-auto">
			<div className="flex items-center justify-between ">
				<BackButton path="/" label="Search" />
				<span className="md:pr-5">
					<strong>{movies?.total_results}</strong> Total movies
				</span>
			</div>

			<Suspense key={`search-${query}`} fallback={<span>cargando...</span>}>
				<MoviesResult movies={movies?.results ?? []} />
			</Suspense>
		</section>
	)
}

export default SearchPage
