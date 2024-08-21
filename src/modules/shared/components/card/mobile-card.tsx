import PlacehoderImage from '@/modules/shared/components/card/placeholder-image'
import ImageWrapper from '@/modules/shared/components/common/image-wrapper'
import VoteAverage from '@/modules/shared/components/vote-average'
import type { MovieInfo } from '@/modules/shared/types/movie-info'
import { baseUrlImage } from '@/modules/shared/utils/config'
import { formatDate } from '@/modules/shared/utils/date-helper'

const MobileCard = ({
	title,
	poster_path,
	release_date,
	vote_average,
	overview,
}: MovieInfo) => {
	return (
		<article className="flex gap-x-1">
			{poster_path ? (
				<ImageWrapper
					src={`${baseUrlImage}/${poster_path}`}
					alt={`Poster of ${title}`}
					width={95}
					height={140}
					className=" w-[95px] h-[140px]"
				/>
			) : (
				<PlacehoderImage className="w-[95px] h-[140px]" />
			)}
			<div className="p-2 flex-1">
				<h2 className="font-bold text-balance text-lg line-clamp-1">{title}</h2>
				<div className="flex items-center justify-between">
					{release_date && (
						<span className="text-sm text-gray-600 dark:text-gray-300">
							{formatDate(release_date)}
						</span>
					)}

					{vote_average !== 0 && (
						<VoteAverage
							voteAverage={vote_average ?? 0}
							size="sm"
							aria-label={`Vote average for ${title} is ${vote_average}`}
							className="text-white bg-black rounded-full z-30"
						/>
					)}
				</div>
				<p className="text-pretty text-gray-800 line-clamp-2 pt-2 dark:text-gray-300">
					{overview}
				</p>
			</div>
		</article>
	)
}

export default MobileCard
