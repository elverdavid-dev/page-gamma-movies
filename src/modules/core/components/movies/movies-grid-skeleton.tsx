import { createSkeletons } from '@/modules/core/utils/create-skeleton'
import MobilCardSkeleton from '@/modules/core/components/card/skeleton/mobile-card-skeleton'
import MovieCardSkeleton from '@/modules/core/components/card/skeleton/movie-card-skeleton'
import BackButton from '@/modules/core/components/common/back-button'
import { Skeleton } from '@nextui-org/react'

interface Props {
	label: string
}

const MoviesGridSkeleton = ({ label }: Props) => {
	const skeleton = createSkeletons(16)
	return (
		<section className="mt-5 mx-2 lg:mx-3">
			<div className="flex items-center justify-between ">
				<BackButton path="/" label={label} />
				<Skeleton className="w-20 h-4 rounded-full" />
			</div>
			<section className="flex flex-col gap-y-5 md:grid md:grid-cols-5 md:gap-y-10 lg:grid-cols-8 mt-16">
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

export default MoviesGridSkeleton
