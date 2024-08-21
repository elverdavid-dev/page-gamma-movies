import { createMetadata } from '@/modules/shared/utils/create-metadata'
import HeroSectionTv from '@/modules/tv/components/hero-section-tv'
import { getDetailsTv } from '@/modules/tv/services/get-details-tv-show'
import { notFound } from 'next/navigation'

interface Props {
	params: { id: string }
}

export const generateMetadata = async ({ params }: Props) => {
	const id = params.id
	const movie = await getDetailsTv({ id_movie: Number(id) })
	return createMetadata({
		title: movie?.name ?? 'Details movie',
		description: movie?.overview,
		ogImg: movie?.poster_path,
		canonicalUrl: `/tv/${id}`,
	})
}

const DetailTvPage = async ({ params }: Props) => {
	const id = params.id
	const tvDetails = await getDetailsTv({ id_movie: Number(id) })
	if (!tvDetails) {
		notFound()
	}
	return (
		<>
			<HeroSectionTv id={Number(id)} tvDetails={tvDetails} />
		</>
	)
}

export default DetailTvPage
