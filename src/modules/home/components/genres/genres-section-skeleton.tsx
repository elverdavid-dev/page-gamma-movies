import Subtitle from '@/modules/shared/components/common/subtitle'
import { createSkeletons } from '@/modules/shared/utils/create-skeleton'
import { Skeleton } from '@nextui-org/react'

const GenresSectionSkeleton = () => {
	const skeleton = createSkeletons(10)
	return (
		<section className="mt-16 px-2 md:px-0 md:container md:mx-auto">
			<Skeleton className="h-6 w-[130px] mb-5 rounded-full" />
			<div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth mt-5">
				{skeleton.map(({ id }) => (
					<Skeleton key={id} className="flex-shrink-0 h-10 rounded-full w-28" />
				))}
			</div>
		</section>
	)
}

export default GenresSectionSkeleton
