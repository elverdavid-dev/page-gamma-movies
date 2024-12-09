import Carusel from '@/home/components/hero/carusel'
import { getTrendingMovies } from '@/home/services/get-trending-movies'

const HeroSection = async () => {
	const trendingMovies = await getTrendingMovies()
	return <Carusel movies={trendingMovies?.results ?? []} />
}

export default HeroSection
