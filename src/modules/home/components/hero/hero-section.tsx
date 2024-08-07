import Carusel from '@/modules/home/components/hero/carusel'
import { getTrendingMovies } from '@/modules/home/services/get-trending-movies'

const HeroSection = async () => {
	const trendingMovies = await getTrendingMovies()
	return <Carusel movies={trendingMovies?.results} />
}

export default HeroSection
