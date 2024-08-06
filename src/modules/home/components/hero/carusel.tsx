'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import type { TrendingResult } from '@/modules/home/types/trending-result'
import { baseUrlImage } from '@/modules/core/utils/config'
import MovieInfoHero from './movie-info-hero'

interface Props {
	movies: TrendingResult[] | undefined
}

const Carusel = ({ movies }: Props) => {
	return (
		<Swiper
			modules={[Autoplay]}
			autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
			loop={true}

		>
			{movies?.map((movie) => (
				<SwiperSlide key={movie.id} className="relative">
					<img
						src={`${baseUrlImage}/${movie.backdrop_path}`}
						alt={movie.original_title}
						height={150}
						className="h-[561px] w-full object-cover"
					/>
					<MovieInfoHero movie={movie} />

					{/* Black gradient overlay for better text readability */}
					<div
						className="absolute inset-0 bg-gradient-to-t via-black/50 from-black  to-transparent z-10"
						aria-label="Background gradient overlay for text readability"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Carusel
