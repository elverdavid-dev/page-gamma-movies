import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import UpcomingContainer from '@/modules/upcoming/components/upcoming-container'
import { Suspense } from 'react'

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
