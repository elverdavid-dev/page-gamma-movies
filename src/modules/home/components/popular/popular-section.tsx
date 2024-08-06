import MovieCard from "@/modules/core/components/card/movie-card"
import SeeMoreButton from "@/modules/core/components/common/see-more-button"
import Subtitle from "@/modules/core/components/common/subtitle"
import { getPopularMovies } from "@/modules/home/services/get-popular-movies"


const PopularSection = async () => {
  const popularMovies = await getPopularMovies()
  return (
    <section className="py-16 container mx-auto">
      <div className="flex items-center justify-between">
        <Subtitle text="Popular" />
        <SeeMoreButton path="/popular" />
      </div>
      <div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {popularMovies?.results.map((movie) => (
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            key={movie.id} />
        ))}
      </div>
    </section>
  )
}

export default PopularSection