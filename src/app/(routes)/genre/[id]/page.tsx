import GenreMoviesSection from '@/modules/genre/components/genre-movies-section'

interface Props {
	params: { id: string }
	searchParams: { [key: string]: string | undefined }
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
