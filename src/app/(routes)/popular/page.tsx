import PopularContainer from '@/modules/popular/components/popular-container'
import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import { createMetadata } from '@/modules/shared/utils/create-metadata'
import { Suspense } from 'react'

export const metadata = createMetadata({
	title: 'Movies popular',
	canonicalUrl: '/popular',
})

interface Props {
	searchParams: { page?: string }
}

const PopularPage = async ({ searchParams }: Props) => {
	const page = Number(searchParams.page ?? 1)
	return (
		<Suspense
			key={`key-${page}`}
			fallback={<MoviesGridSkeleton label="Popular" />}
		>
			<PopularContainer page={page} />
		</Suspense>
	)
}

export default PopularPage
