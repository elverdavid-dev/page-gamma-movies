import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import TopRatedContainer from '@/modules/top-rated/components/top-rated-container'
import { Suspense } from 'react'

interface Props {
	searchParams: { page?: number }
}

const TopRatedPage = async ({ searchParams }: Props) => {
	const page = Number(searchParams.page ?? 1)
	return (
		<Suspense
			key={`key-${page}`}
			fallback={<MoviesGridSkeleton label="Top Rated" />}
		>
			<TopRatedContainer page={page} />
		</Suspense>
	)
}

export default TopRatedPage
