'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import MovieInfoHero from '@/home/components/hero/movie-info-hero'
import type { Movie } from '@/types/movie'
import { baseUrlImage } from '@/utils/config'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import { Autoplay, Pagination } from 'swiper/modules'

interface Props {
	movies: Movie[]
}

const Carusel = ({ movies }: Props) => {
	return (
		<Swiper
			modules={[Autoplay, Pagination]}
			pagination={{ clickable: true, dynamicBullets: true }}
			autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
			loop={true}
			aria-label="Trending movies carousel"
		>
			{movies?.map((movie) => (
				<SwiperSlide key={movie.id} className="relative black-overlay">
					<Link href={`/movie/${movie.id}`}>
						<Image
							src={`${baseUrlImage}/${movie.backdrop_path}`}
							alt={movie.original_title}
							radius="none"
							width={1355}
							height={570}
							className="h-[570px] w-full object-cover"
							loading="eager"
						/>
					</Link>
					<MovieInfoHero movie={movie} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Carusel
