import VoteAverage from "@/modules/core/components/vote-average"
import type { Movie } from "@/modules/core/types/movie"
import { CircularProgress } from "@nextui-org/progress"
import { FavouriteIcon, Bookmark02Icon, Share08Icon } from "hugeicons-react"

interface Props {
  movie: Movie
}
const MovieInfoHero = ({ movie }: Props) => {
  return (
    <section className="absolute bottom-0 inset-x-0 z-20 p-5 container mx-auto text-white">
      <div className="flex items-center justify-between">
        <article>
          <h2 className="text-5xl font-ibmPlexSans text-white text-balance">
            {movie.title}
          </h2>
          <p className="text-pretty w-3/4 py-3 text-gray-300 text-lg">{movie.overview}
          </p>
        </article>

        {/* Vote Average*/}

        {
          movie.vote_average !== 0 && (
            <VoteAverage voteAverage={movie.vote_average} size="lg" />
          )
        }
      </div>
      {/* Actions */}

      <div className="flex items-center gap-x-10 justify-end">
        <button type="button" className="active:scale-90 transition-all">
          <FavouriteIcon />
        </button>

        <button type="button" className="active:scale-90 transition-all">
          <Bookmark02Icon />
        </button>

        <button type="button" className="active:scale-90 transition-all">
          <Share08Icon />
        </button>
      </div>
    </section>
  )
}

export default MovieInfoHero