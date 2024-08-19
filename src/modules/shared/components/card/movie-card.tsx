import PlacehoderImage from '@/modules/shared/components/card/placeholder-image'
import ImageWrapper from '@/modules/shared/components/common/image-wrapper'
import VoteAverage from '@/modules/shared/components/vote-average'
import type { MovieInfo } from '@/modules/shared/types/movie-info'
import { baseUrlImage } from '@/modules/shared/utils/config'
import { formatDate } from '@/modules/shared/utils/format-date'

const MovieCard = ({
	title,
	poster_path,
	release_date,
	vote_average,
}: MovieInfo) => {
	return (
		<article className="flex-shrink-0 w-[150px]">
			<div className="relative">
				{poster_path ? (
					<ImageWrapper
						src={`${baseUrlImage}${poster_path}`}
						alt={`Poster of ${title}`}
						width={150}
						height={225}
						className="rounded-2xl w-[140px] lg:w-[150px] h-[225px]"
					/>
				) : (
					<PlacehoderImage className="w-[140px] lg:w-[150px] h-[225px]" />
				)}

				{vote_average !== 0 && (
					<VoteAverage
						voteAverage={vote_average ?? 0}
						size="sm"
						aria-label={`Vote average for ${title} is ${vote_average}`}
						className="absolute -bottom-3 left-3 text-white bg-black rounded-full z-30"
					/>
				)}
			</div>
			<h3 className="pt-5 font-bold line-clamp-2">{title} </h3>
			{release_date && (
				<span className="text-sm text-gray-600 dark:text-gray-300">
					{formatDate(release_date)}
				</span>
			)}
		</article>
	)
}

export default MovieCard
