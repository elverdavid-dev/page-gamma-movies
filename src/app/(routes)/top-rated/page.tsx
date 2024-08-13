import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import { createMetadata } from '@/modules/shared/utils/create-metadata'
import TopRatedContainer from '@/modules/top-rated/components/top-rated-container'
import { Suspense } from 'react'

export const metadata = createMetadata({
	title: 'Movies top rated',
	canonicalUrl: '/top-rated',
})

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
