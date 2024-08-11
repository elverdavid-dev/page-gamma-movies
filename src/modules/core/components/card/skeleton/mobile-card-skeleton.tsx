import { Skeleton } from '@nextui-org/react'

const MobilCardSkeleton = () => {
	return (
		<section className="flex gap-x-1">
			<Skeleton className="w-[95px] h-[140px] rounded-2xl" />
			<div className="p-2 flex-1">
				<Skeleton className="w-3/4 h-4 rounded-full" />
				<Skeleton className="w-16 h-3 rounded-full my-3" />
				<Skeleton className="w-3/5 h-2 rounded-full mt-3" />
				<Skeleton className="w-1/2 h-2 rounded-full mt-1" />
			</div>
		</section>
	)
}

export default MobilCardSkeleton
