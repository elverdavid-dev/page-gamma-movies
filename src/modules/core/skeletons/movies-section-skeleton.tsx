import { Skeleton } from '@nextui-org/react'
import { createSkeletons } from '@/modules/core/utils/create-skeleton'
import MovieCardSkeleton from '@/modules/core/components/card/skeleton/movie-card-skeleton'

const MovieSectionSkeleton = () => {
	const skeleton = createSkeletons(8)

	return (
		<section className="mt-16 px-2 md:px-0  md:container md:mx-auto">
			<Skeleton className="h-6 w-[130px] mb-5 rounded-full" />
			<div className="flex items-start gap-x-2 lg:gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
				{skeleton.map(({ id }) => (
					<div key={id}>
						<MovieCardSkeleton />
					</div>
				))}
			</div>
		</section>
	)
}

export default MovieSectionSkeleton
