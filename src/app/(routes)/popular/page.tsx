import MoviesGrid from '@/modules/core/components/movies/movies-grid'
import { getPopularMovies } from '@/modules/home/services/get-popular-movies'

const PopularPage = async () => {
  const popularMovies = await getPopularMovies()

  return (
    <MoviesGrid
      movies={popularMovies?.results ?? []}
      title="Popular"
      totalResults={popularMovies?.total_results ?? 0}
    />
  )
}

export default PopularPage
