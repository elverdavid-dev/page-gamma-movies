import Carusel from '@/modules/home/components/hero/carusel'
import { gettrendingMovies } from '@/modules/home/services/get-trending-movies'

const Home = async () => {
	const trendingMovies = await gettrendingMovies()
	console.log(trendingMovies)
	return (
		<>
			<Carusel movies={trendingMovies?.results} />
		</>
	)
}

export default Home
