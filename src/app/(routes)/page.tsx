import Carusel from '@/modules/home/components/hero/carusel'
import PopularSection from '@/modules/home/components/popular/popular-section'
import { getPopularMovies } from '@/modules/home/services/get-popular-movies'
import { gettrendingMovies } from '@/modules/home/services/get-trending-movies'

const Home = async () => {
	const trendingMovies = await gettrendingMovies()
	return (
		<>
			<Carusel movies={trendingMovies?.results} />
			<PopularSection />
		</>
	)
}

export default Home
