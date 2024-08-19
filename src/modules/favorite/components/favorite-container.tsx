import { getFavoriteMovies } from '@/modules/favorite/services/get-favorite-movies'

const FavoriteContainer = async () => {
	const movies = await getFavoriteMovies()
	return (
		<section className="mt-16 px-2 md:px-0  md:container md:mx-auto">
			test
		</section>
	)
}

export default FavoriteContainer
