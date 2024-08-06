import HeroSection from '@/modules/home/components/hero/hero-section'
import NowPlayingSection from '@/modules/home/components/now-playing/now-playing-section'
import PopularSection from '@/modules/home/components/popular/popular-section'
import UpcomingSection from '@/modules/home/components/upcoming/upcoming-section'

const Home = async () => {
	return (
		<>
			<HeroSection />
			<PopularSection />
			<NowPlayingSection />
			<UpcomingSection />
		</>
	)
}

export default Home
