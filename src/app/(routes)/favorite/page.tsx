import MoviesGridSkeleton from '@/components/movies/skeletons/movies-grid-skeleton'
import FavoriteContainer from '@/favorite/components/favorite-container'
import { Suspense } from 'react'

const FavoritePage = async () => {
	return (
		<>
			<Suspense fallback={<MoviesGridSkeleton label="Favorite" />}>
				<FavoriteContainer />
			</Suspense>
		</>
	)
}

export default FavoritePage
