import MoviesGridSkeleton from '@/modules/shared/components/movies/movies-grid-skeleton'
import NowPlayingContainer from '@/modules/now-playing/components/now-playing-container'
import { Suspense } from 'react'

interface Props {
	searchParams: { page?: string }
}
const NowPlayingPage = async ({ searchParams }: Props) => {
	const page = Number(searchParams.page ?? 1)
	return (
		<Suspense
			key={`key-${page}`}
			fallback={<MoviesGridSkeleton label="Now Playing" />}
		>
			<NowPlayingContainer page={page} />
		</Suspense>
	)
}

export default NowPlayingPage
