import GenresSection from '@/modules/home/components/genres/genres-section'
import GenresSectionSkeleton from '@/modules/home/components/genres/genres-section-skeleton'
import HeroSection from '@/modules/home/components/hero/hero-section'
import HeroSectionSkeleton from '@/modules/home/components/hero/hero-section-skeleton'
import NowPlayingSection from '@/modules/home/components/now-playing/now-playing-section'
import PopularSection from '@/modules/home/components/popular/popular-section'
import TopRatedSection from '@/modules/home/components/top-rated/top-rated-section'
import UpcomingSection from '@/modules/home/components/upcoming/upcoming-section'
import MovieSectionSkeleton from '@/modules/shared/components/movies/skeletons/movies-section-skeleton'
import { Suspense } from 'react'

const Home = async () => {
	return (
		<>
			<Suspense fallback={<HeroSectionSkeleton />}>
				<HeroSection />
			</Suspense>

			<Suspense fallback={<GenresSectionSkeleton />}>
				<GenresSection />
			</Suspense>

			<Suspense fallback={<MovieSectionSkeleton />}>
				<PopularSection />
			</Suspense>

			<Suspense fallback={<MovieSectionSkeleton />}>
				<NowPlayingSection />
			</Suspense>

			<Suspense fallback={<MovieSectionSkeleton />}>
				<UpcomingSection />
			</Suspense>

			<Suspense fallback={<MovieSectionSkeleton />}>
				<TopRatedSection />
			</Suspense>
		</>
	)
}

export default Home
