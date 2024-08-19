import GenreContainer from '@/modules/genre/components/genre-container'
import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import { createMetadata } from '@/modules/shared/utils/create-metadata'
import { Suspense } from 'react'

interface Props {
	params: { id: string }
	searchParams: {
		genreName?: string
		page?: string
	}
}

export const generateMetadata = ({ params, searchParams }: Props) => {
	return createMetadata({
		title: `Movies ${searchParams.genreName}`,
		canonicalUrl: `/genre/${params.id}?genreName=${searchParams.genreName}&page${searchParams.page ?? '1'}`,
	})
}

const DetailsGenresPage = async ({ params, searchParams }: Props) => {
	const idMovie = params.id
	const genreName = searchParams.genreName
	const page = Number(searchParams.page ?? 1)
	return (
		<Suspense
			key={`key-${page}`}
			fallback={<MoviesGridSkeleton label={genreName ?? "Genre"} />}
		>
			<GenreContainer
				idMovie={Number(idMovie)}
				genreName={genreName}
				page={page}
			/>

		</Suspense>
	)
}

export default DetailsGenresPage
