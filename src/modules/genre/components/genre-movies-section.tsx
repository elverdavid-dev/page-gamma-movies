import MobileCard from '@/modules/core/components/card/mobile-card'
import MovieCard from '@/modules/core/components/card/movie-card'
import BackButton from '@/modules/core/components/common/back-button'
import { formatNumber } from '@/modules/core/utils/format-number'
import { getMoviesByGenres } from '@/modules/genre/services/get-movies-by-genres'
import Link from 'next/link'

interface Props {
  idMovie: number
  genreName?: string
}
const GenreMoviesSection = async ({ idMovie, genreName }: Props) => {
  const movies = await getMoviesByGenres(idMovie)
  return (
    <>
      <div className="flex items-center justify-between">
        <BackButton path="/" label={genreName} />
        <span className="md:pr-5">
          <strong>{formatNumber(movies?.total_results)}</strong> Total movies
        </span>
      </div>
      <section className="flex flex-col gap-y-5 md:grid md:grid-cols-5 md:gap-y-10 lg:grid-cols-8 mt-16">
        {movies?.results.map(
          ({
            id,
            title,
            poster_path,
            release_date,
            vote_average,
            overview,
          }) => (
            <Link key={id} href={`/movie/${id}`}>
              {/* Mobile Section */}
              <div className="md:hidden">
                <MobileCard
                  title={title}
                  poster_path={poster_path}
                  release_date={release_date}
                  vote_average={vote_average}
                  overview={overview}
                />
              </div>

              {/* Desktop section */}
              <div className="hidden md:block">
                <MovieCard
                  title={title}
                  poster_path={poster_path}
                  release_date={release_date}
                  vote_average={vote_average}
                />
              </div>
            </Link>
          ),
        )}
      </section>
    </>
  )
}

export default GenreMoviesSection
