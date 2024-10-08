'use client'
import type { Genre } from '@/modules/home/types/genres'
import PlacehoderImage from '@/modules/shared/components/card/placeholder-image'
import ImageWrapper from '@/modules/shared/components/common/image-wrapper'
import VoteAverage from '@/modules/shared/components/vote-average'
import { baseUrlImage } from '@/modules/shared/utils/config'
import { formatDate } from '@/modules/shared/utils/date-helper'
import { Button, cn } from '@nextui-org/react'
import {
	Bookmark02Icon,
	Calendar03Icon,
	Clock01Icon,
	FavouriteIcon,
	PlayIcon,
	Share08Icon,
	Tag01Icon,
} from 'hugeicons-react'
import Link from 'next/link'

interface Props {
	urlTrailer?: string
	poster_path?: string
	name?: string
	first_air_date?: string
	genres?: Genre[]
	number_of_episodes?: number
	vote_average?: number
	overview?: string
}

const TvDetailsHero = ({
	urlTrailer,
	first_air_date,
	genres,
	name,
	number_of_episodes,
	overview,
	poster_path,
	vote_average,
}: Props) => {
	return (
		<section className="static md:absolute px-2 md:px-0  md:container md:mx-auto  inset-0 z-10 md:flex md:gap-x-5 pt-16">
			<div className="flex flex-col gap-y-3 items-center justify-center md:block pb-5 md:pb-0">
				{poster_path ? (
					<ImageWrapper
						src={`${baseUrlImage}/${poster_path}`}
						alt={name}
						width={305}
						height={395}
						className="object-cover w-[305px] h-[395px] z-30"
					/>
				) : (
					<PlacehoderImage className="w-[305px] h-[395px]" />
				)}
				<Button
					href={urlTrailer ?? ''}
					as={Link}
					isDisabled={!urlTrailer}
					fullWidth
					endContent={<PlayIcon size={18} strokeWidth={2} />}
					className="mt-4 bg-[#F0B90B] text-gray-800"
					target="_blank"
					rel="noopener noreferrer"
				>
					Play Trailer
				</Button>
			</div>
			<div className="text-white md:w-3/4">
				{/* name */}
				<h1 className="text-3xl md:text-5xl font-ibmPlexSans text-balance">
					{name}{' '}
				</h1>

				{/* MovieMetaData */}
				<div className="flex flex-wrap items-center gap-x-5 pt-3 text-gray-300">
					{first_air_date && (
						<span className="flex items-center gap-x-1">
							<Calendar03Icon size={18} strokeWidth={2} />
							{formatDate(first_air_date ?? '')}
						</span>
					)}
					<div className="flex items-center gap-x-1 order-3 md:order-2">
						<Tag01Icon size={18} strokeWidth={2} />
						<span>{genres?.map(({ name }) => name).join(', ')}</span>
					</div>
				</div>

				{/* Overview */}
				<div className=" pt-10 lg:pt-16">
					<h2 className="text-3xl font-ibmPlexSans text-white pb-5">
						Overview
					</h2>
					<p className="text-lg text-gray-300 text-pretty">{overview} </p>
				</div>

				<section className="flex items-center justify-between mt-16 pb-5 md:pb-0">
					<div className="flex items-center gap-x-2">
						{/* Vote Average*/}

						{vote_average !== 0 && (
							<VoteAverage
								voteAverage={vote_average ?? 0}
								size="lg"
								classNames={{
									svg: 'w-20 h-20 drop-shadow-md',
									track: 'stroke-white/10',
									value: 'text-xl font-semibold text-white',
								}}
								aria-label={`Vote average for ${name} is ${vote_average}`}
							/>
						)}
						<span
							className={cn(
								'text-lg font-ibmPlexSans leading-tight',
								!vote_average && 'hidden',
							)}
						>
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

export default TvDetailsHero
