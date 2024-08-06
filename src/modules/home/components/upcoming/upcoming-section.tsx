import MovieCard from "@/modules/core/components/card/movie-card"
import SeeMoreButton from "@/modules/core/components/common/see-more-button"
import Subtitle from "@/modules/core/components/common/subtitle"
import { getUpcomingMovies } from "@/modules/home/services/get-upcoming-movies"

const UpcomingSection = async () => {
  const upcomingMovies = await getUpcomingMovies()
  return (
    <section className="py-16 container mx-auto">
      <div className="flex items-center justify-between">
        <Subtitle text="Upcoming" />
        <SeeMoreButton path="/upcoming" />
      </div>
      <div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {upcomingMovies?.results.map((movie) => (
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

export default UpcomingSection