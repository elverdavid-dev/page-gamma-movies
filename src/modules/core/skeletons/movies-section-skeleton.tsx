import { Skeleton } from "@nextui-org/react"
import { createSkeletons } from "@/modules/core/utils/create-skeleton"

const MovieSectionSkeleton = () => {
  const skeleton = createSkeletons(8)

  return (
    <section className="mt-16 px-2 md:px-0  md:container md:mx-auto">
      <Skeleton className="h-6 w-[130px] mb-5 rounded-full" />
      <div className="flex items-start gap-x-2 lg:gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {
          skeleton.map(({ id }) => (
            <div key={id}>
              <Skeleton className="rounded-2xl w-[140px] lg:w-[150px] h-[225px] flex-shrink-0" />
              <Skeleton className="h-4 w-4/5 rounded-full mt-5" />
              <Skeleton className="h-2 w-1/2 rounded-full mt-1" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default MovieSectionSkeleton