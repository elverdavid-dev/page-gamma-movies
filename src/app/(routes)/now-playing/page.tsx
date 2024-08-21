import NowPlayingContainer from '@/modules/now-playing/components/now-playing-container'
import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import { createMetadata } from '@/modules/shared/utils/create-metadata'
import { Suspense } from 'react'

export const metadata = createMetadata({
	title: 'Movies now playing',
	canonicalUrl: '/now-playing',
})

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
