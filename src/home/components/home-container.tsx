import MoviesSection from '@/components/movies/sections/movies-section'
import { getSettledData } from '@/helpers/parallelFetch'
import { getGenres } from '@/home/services/get-genres'
import { getNowPlayingMovies } from '@/services/get-now-playing-movies'
import { getPopularMovies } from '@/services/get-popular-movies'
import { getTopRatedMovies } from '@/services/get-top-reted-movies'
import { getUpcomingMovies } from '@/services/get-upcoming-movies'
import { getTrendingMovies } from '@/home/services/get-trending-movies'
import GenresSection from './genres/genres-section'
import Carusel from './hero/carusel'

const HomeContainer = async () => {
  const [trendingMovies, genresMovies, popularMovies, nowPlayingmovies, upcomingMovies, topRated] =
    await Promise.allSettled([
      getTrendingMovies(),
      getGenres(),
      getPopularMovies(),
      getNowPlayingMovies(),
      getUpcomingMovies(),
      getTopRatedMovies()
    ])

  const dataMovies = {
    trendingMoviesData: getSettledData(trendingMovies),
    genresMoviesData: getSettledData(genresMovies),
    popularMoviesData: getSettledData(popularMovies),
    nowPlayingmoviesData: getSettledData(nowPlayingmovies),
    upcomingMoviesData: getSettledData(upcomingMovies),
    topRatedMoviesData: getSettledData(topRated)
  }
  return (
    <>
      <Carusel movies={dataMovies?.trendingMoviesData?.data?.results ?? []} />
      <GenresSection genresMovies={dataMovies?.genresMoviesData.data} />
      <MoviesSection
        title="Popular"
        seeMorePath="/popular"
        moviesData={dataMovies.popularMoviesData.data}
      />
      <MoviesSection
        title="Now Playing"
        seeMorePath="/now-playing"
        moviesData={dataMovies.nowPlayingmoviesData.data}
      />
      <MoviesSection
        title="Upcoming"
        seeMorePath="/upcoming"
        moviesData={dataMovies.upcomingMoviesData.data}
      />
      <MoviesSection
        title="Top Rated"
        seeMorePath="/top-rated"
        moviesData={dataMovies.topRatedMoviesData.data}
      />
    </>
  )
}

export default HomeContainer
