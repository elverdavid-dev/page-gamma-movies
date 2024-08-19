import FavoriteContainer from '@/modules/favorite/components/favorite-container'
import MoviesGridSkeleton from '@/modules/shared/components/movies/skeletons/movies-grid-skeleton'
import { Suspense } from 'react'

const FavoritePage = async () => {
	return (
		<>
			<Suspense fallback={<MoviesGridSkeleton label='Favorite' />}>
				<FavoriteContainer />
			</Suspense>
		</>
	)
}

export default FavoritePage
