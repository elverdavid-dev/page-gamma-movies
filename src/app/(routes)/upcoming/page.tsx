import MoviesGridSkeleton from '@/components/movies/skeletons/movies-grid-skeleton'
import UpcomingContainer from '@/upcoming/components/upcoming-container'
import { createMetadata } from '@/utils/create-metadata'
import { Suspense } from 'react'

export const metadata = createMetadata({
	title: 'Movies upcoming',
	canonicalUrl: '/upcoming',
})

interface Props {
	searchParams: { page?: string }
}

const UpcomingPage = async ({ searchParams }: Props) => {
	const page = Number(searchParams.page ?? 1)
	return (
		<Suspense
			key={`key-${page}`}
			fallback={<MoviesGridSkeleton label="Upcoming" />}
		>
			<UpcomingContainer page={page} />
		</Suspense>
	)
}

export default UpcomingPage
