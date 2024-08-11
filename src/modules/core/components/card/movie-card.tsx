import ImageWrapper from '@/modules/core/components/common/image-wrapper'
import VoteAverage from '@/modules/core/components/vote-average'
import type { Movie } from '@/modules/core/types/movie'
import { baseUrlImage } from '@/modules/core/utils/config'
import { formatDate } from '@/modules/core/utils/format-date'
import PlacehoderImage from './placeholder-image'
interface Props
	extends Pick<
		Movie,
		'title' | 'poster_path' | 'release_date' | 'vote_average'
	> {}

const MovieCard = ({
	title,
	poster_path,
	release_date,
	vote_average,
}: Props) => {
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
						voteAverage={vote_average}
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
