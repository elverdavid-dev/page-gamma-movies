import { Skeleton } from '@nextui-org/react'
import React from 'react'

const MovieCardSkeleton = () => {
	return (
		<div>
			<Skeleton className="rounded-2xl w-[140px] lg:w-[150px] h-[225px] flex-shrink-0" />
			<Skeleton className="h-4 w-4/5 rounded-full mt-5" />
			<Skeleton className="h-2 w-1/2 rounded-full mt-1" />
		</div>
	)
}

export default MovieCardSkeleton
