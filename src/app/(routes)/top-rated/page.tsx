import MoviesGridSkeleton from '@/modules/core/components/movies/movies-grid-skeleton'
import TopRatedContainer from '@/modules/top-rated/components/top-rated-container'
import { Suspense } from 'react'

interface Props {
	searchParams: { page?: number }
}

const TopRatedPage = async ({ searchParams }: Props) => {
	const page = Number(searchParams.page ?? 1)
	return (
		<Suspense key={`key-${page}`} fallback={<MoviesGridSkeleton label='Top Rated' />}>
			<TopRatedContainer page={page} />
		</Suspense>
	)
}

export default TopRatedPage
