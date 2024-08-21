import MobilCardSkeleton from '@/modules/shared/components/card/skeleton/mobile-card-skeleton'
import MovieCardSkeleton from '@/modules/shared/components/card/skeleton/movie-card-skeleton'
import BackButton from '@/modules/shared/components/common/back-button'
import { createSkeletons } from '@/modules/shared/utils/create-skeleton'
import { Skeleton } from '@nextui-org/react'

const MoviesResultSkeleton = () => {
	const skeleton = createSkeletons(16)
	return (
		<section className="px-2 md:px-0  md:container md:mx-auto">
			<div className="flex items-center justify-between ">
				<BackButton path="/" label="Search" />
				<Skeleton className="w-20 h-4 rounded-full" />
			</div>
			{/* Filter skeleton */}
			<div className="flex items-center gap-x-2 mt-6">
				<Skeleton className="w-[110px] h-[35px] rounded-2xl" />
				<Skeleton className="w-[80px] h-[35px] rounded-2xl" />
				<Skeleton className="w-[65px] h-[35px] rounded-2xl" />
			</div>
			<section className="flex flex-col gap-y-5 md:grid md:grid-cols-5 md:gap-y-10 lg:grid-cols-8 mt-5">
				{skeleton.map(({ id }) => (
					<section key={id}>
						<div className="hidden md:block">
							<MovieCardSkeleton />
						</div>
						<div className="block md:hidden">
							<MobilCardSkeleton />
						</div>
					</section>
				))}
			</section>
		</section>
	)
}

export default MoviesResultSkeleton
