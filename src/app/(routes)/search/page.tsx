import MoviesResult from '@/modules/search/components/movies-result'
import MoviesResultSkeleton from '@/modules/search/components/skeleton/movies-result-skeleton'
import { Suspense } from 'react'

interface Props {
	searchParams: { [key: string]: string | undefined }
}

const SearchPage = async ({ searchParams }: Props) => {
	const query = searchParams.q
	return (
		<Suspense key={`search-${query}`} fallback={<MoviesResultSkeleton />}>
			<MoviesResult query={query ?? ''} />
		</Suspense>
	)
}

export default SearchPage
