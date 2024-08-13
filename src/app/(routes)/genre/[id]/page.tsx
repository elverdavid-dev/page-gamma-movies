import GenreMoviesSection from '@/modules/genre/components/genre-movies-section'
import { createMetadata } from '@/modules/shared/utils/create-metadata'

interface Props {
	params: { id: string }
	searchParams: { genreName: string | undefined }
}

export const generateMetadata = ({ params, searchParams }: Props) => {
	return createMetadata({
		title: `Movies ${searchParams.genreName}`,
		canonicalUrl: `/genre/${params.id}?genreName=${searchParams.genreName}`,
	})
}

const DetailsGenresPage = async ({ params, searchParams }: Props) => {
	const idMovie = params.id
	const genreName = searchParams.genreName
	return (
		<section className="mt-5 mx-2 lg:mx-3">
			<GenreMoviesSection idMovie={Number(idMovie)} genreName={genreName} />
		</section>
	)
}

export default DetailsGenresPage
