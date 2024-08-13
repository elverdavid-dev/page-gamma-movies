import MoviesResult from '@/modules/search/components/movies-result'
import MoviesResultSkeleton from '@/modules/search/components/skeleton/movies-result-skeleton'
import { createMetadata } from '@/modules/shared/utils/create-metadata'
import { Suspense } from 'react'

interface Props {
	searchParams: { q?: string; page?: string }
}

export const generateMetadata = ({ searchParams }: Props) => {
	return createMetadata({
		title: `Search results for ${searchParams.q}`,
		canonicalUrl: `/search?q=${searchParams.q}`,
	})
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
