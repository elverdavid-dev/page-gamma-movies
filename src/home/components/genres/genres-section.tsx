import Subtitle from '@/components/common/subtitle'
import type { GenresResponse } from '@/home/types/genres'
import Link from 'next/link'
import type { FC } from 'react'

interface Props {
	genresMovies?: GenresResponse
}

const GenresSection: FC<Props> = async ({ genresMovies }) => {
	return (
		<section className="mt-16 px-2 md:px-0 md:container md:mx-auto">
			<Subtitle text="Genres" />

			<div className="flex items-start gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth mt-5">
				{genresMovies?.genres.map(({ id, name }) => (
					<Link
						key={id}
						href={`/genre/${id}?genreName=${name}`}
						className="flex-shrink-0 text-gray-800 hover:text-white hover:bg-black transition-all py-2 px-5 rounded-full border border-gray-300 dark:text-gray-300 dark:border-gray-700 dark:hover:border-white dark:hover:text-white"
					>
						{name}
					</Link>
				))}
			</div>
		</section>
	)
}

export default GenresSection
