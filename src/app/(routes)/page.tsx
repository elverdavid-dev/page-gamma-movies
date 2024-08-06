import GenresSection from '@/modules/home/components/genres/genres-section'
import HeroSection from '@/modules/home/components/hero/hero-section'
import NowPlayingSection from '@/modules/home/components/now-playing/now-playing-section'
import PopularSection from '@/modules/home/components/popular/popular-section'
import TopRatedSection from '@/modules/home/components/top-rated/top-rated-section'
import UpcomingSection from '@/modules/home/components/upcoming/upcoming-section'

const Home = async () => {
	return (
		<>
			<HeroSection />
			<GenresSection />
			<PopularSection />
			<NowPlayingSection />
			<UpcomingSection />
			<TopRatedSection />
			
		</>
	)
}

export default Home
