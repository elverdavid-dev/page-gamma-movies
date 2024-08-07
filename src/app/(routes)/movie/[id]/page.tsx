import HeroSection from '@/modules/movie/components/hero/hero-section'

interface Props {
	params: { id: string }
}

const DetailMoviePage = async ({ params }: Props) => {
	const id = params.id
	return <HeroSection id={Number(id)} />
}

export default DetailMoviePage
