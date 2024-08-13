import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import PopularContainer from '@/modules/popular/components/popular-container'
import { Suspense } from 'react'
import { createMetadata } from '@/modules/shared/utils/create-metadata'

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
