import { gettrendingMovies } from "@/modules/home/services/get-trending-movies"
import Carusel from "@/modules/home/components/hero/carusel"

const HeroSection = async () => {
  const trendingMovies = await gettrendingMovies()
  return (
    <Carusel movies={trendingMovies?.results} />
  )
}

export default HeroSection