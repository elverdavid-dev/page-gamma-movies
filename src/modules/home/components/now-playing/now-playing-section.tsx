import MovieCard from "@/modules/core/components/card/movie-card"
import SeeMoreButton from "@/modules/core/components/common/see-more-button"
import Subtitle from "@/modules/core/components/common/subtitle"
import { getNowPlaying } from "@/modules/home/services/get-now-playing"

const NowPlayingSection = async () => {
  const nowPlayingMovies = await getNowPlaying()
  console.log(nowPlayingMovies)

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between">
        <Subtitle text="Now Playing" />
        <SeeMoreButton path="/now-playing" />
      </div>
      <div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {nowPlayingMovies?.results.map((movie) => (
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

export default NowPlayingSection