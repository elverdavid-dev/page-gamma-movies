import MoviesGrid from '@/modules/core/components/movies/movies-grid'
import { getPopularMovies } from '@/modules/home/services/get-popular-movies'

const PopularPage = async () => {
  const movies = await getPopularMovies()

  return (
    <MoviesGrid
      movies={movies?.results ?? []}
      title="Popular"
      totalResults={movies?.total_results ?? 0}
    />
  )
}

export default PopularPage
