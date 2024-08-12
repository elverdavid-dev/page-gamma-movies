import MoviesResult from '@/modules/search/components/movies-result'
import MoviesResultSkeleton from '@/modules/search/components/skeleton/movies-result-skeleton'
import { Suspense } from 'react'

interface Props {
	searchParams: { q?: string; page?: string }
}

const SearchPage = async ({ searchParams }: Props) => {
	const query = searchParams.q
	const page = searchParams.page ?? 1

	return (
		<Suspense
			key={`search-${query}-${page}`}
			fallback={<MoviesResultSkeleton />}
		>
			<MoviesResult query={query ?? ''} page={Number(page)} />
		</Suspense>
	)
}

export default SearchPage
