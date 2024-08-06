import { getTrendingMovies } from '@/modules/home/services/get-trending-movies'
import Carusel from '@/modules/home/components/hero/carusel'

const HeroSection = async () => {
	const trendingMovies = await getTrendingMovies()
	return <Carusel movies={trendingMovies?.results} />
}

export default HeroSection
