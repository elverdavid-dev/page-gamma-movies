import FavoriteContainer from '@/modules/favorite/components/favorite-container'
import { Suspense } from 'react'

const FavoritePage = async () => {
	return (
		<>
			<Suspense fallback={<span>loading...</span>}>
				<FavoriteContainer />
			</Suspense>
		</>
	)
}

export default FavoritePage
