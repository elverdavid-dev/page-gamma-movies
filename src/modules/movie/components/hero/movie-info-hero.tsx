'use client'
import ImageWrapper from '@/modules/core/components/common/image-wrapper'
import { baseUrlImage } from '@/modules/core/utils/config'
import type { MovieDetail } from '@/modules/movie/types/movie-details'
import { Button } from '@nextui-org/react'
import {
  PlayIcon,
  Time04Icon,
  Calendar03Icon,
  FavouriteIcon,
  Bookmark02Icon,
  Share08Icon,
  Tag01Icon,
} from 'hugeicons-react'
import Link from 'next/link'
import { formatRuntime } from '@/modules/movie/utils/format-runtime'
import { formatDate } from '@/modules/core/utils/format-date'
import VoteAverage from '@/modules/core/components/vote-average'

interface Props {
  movieDetails: MovieDetail | undefined
  urlTrailer: string | undefined
}
const MovieInfoHero = ({ movieDetails, urlTrailer }: Props) => {
  console.log(movieDetails)
  return (
    <section className="absolute container mx-auto  inset-0 z-20 flex gap-x-5 mt-16">
      <div className="">
        <ImageWrapper
          src={`${baseUrlImage}/${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
          width={305}
          height={395}
          className="object-cover w-[305px] h-[395px] z-30"
        />
        <Button
          href={urlTrailer}
          disabled={!urlTrailer}
          as={Link}
          fullWidth
          endContent={<PlayIcon size={18} strokeWidth={2} />}
          className="mt-4 bg-[#F0B90B] text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Trailer
        </Button>
      </div>
      <div className="text-white w-3/4">
        {/* Title */}
        <h1 className="text-5xl font-ibmPlexSans text-balance">
          {movieDetails?.title}{' '}
        </h1>

        {/* MovieMetaData */}
        <div className="flex items-center gap-x-5 pt-3 text-gray-300">
          <span className="flex items-center gap-x-1">
            <Calendar03Icon size={18} strokeWidth={2} />
            {formatDate(movieDetails?.release_date ?? '')}
          </span>
          <div className='flex items-center gap-x-1'>
            <Tag01Icon size={18} strokeWidth={2} />
            <span>
              {movieDetails?.genres.map(({ name }) => name).join(', ')}
            </span>
          </div>
          <span className="flex items-center gap-x-1">
            <Time04Icon size={18} strokeWidth={2} />
            {formatRuntime(movieDetails?.runtime ?? 0)}
          </span>
        </div>

        {/* Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-ibmPlexSans text-white pb-5">
            Overview
          </h2>
          <p className="text-lg text-gray-300 text-pretty">
            {movieDetails?.overview}{' '}
          </p>
        </div>

        <section className="flex items-center justify-between mt-16">
          <div className="flex items-center gap-x-2">
            {/* Vote Average*/}

            {movieDetails?.vote_average !== 0 && (
              <VoteAverage
                voteAverage={movieDetails?.vote_average ?? 0}
                size="lg"
                classNames={{
                  svg: 'w-20 h-20 drop-shadow-md',
                  track: 'stroke-white/10',
                  value: 'text-xl font-semibold text-white',
                }}
                aria-label={`Vote average for ${movieDetails?.title} is ${movieDetails?.vote_average}`}
              />
            )}
            <span className="text-lg font-ibmPlexSans leading-tight">
              Users <br /> score
            </span>
          </div>
          <div className="flex items-center gap-x-10 justify-end">
            <button
              type="button"
              className="active:scale-90 transition-all"
              aria-label="Add to favorites"
            >
              <FavouriteIcon />
            </button>

            <button
              type="button"
              className="active:scale-90 transition-all"
              aria-label="Bookmark this movie"
            >
              <Bookmark02Icon />
            </button>

            <button
              type="button"
              className="active:scale-90 transition-all"
              aria-label="Share this movie"
            >
              <Share08Icon />
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default MovieInfoHero
