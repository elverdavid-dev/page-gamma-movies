import { apiKey, baseUrl } from "@/modules/core/utils/config"
import type { TrendingsResponse } from "@/modules/home/types/trending-result"

export const gettrendingMovies = async () => {
  const url = `${baseUrl}/trending/movie/day?api_key=${apiKey}&language=en-US`
  try {
    const response = await fetch(url, { next: { revalidate: 60 } })
    if (!response.ok) {
      throw new Error("Error getting the latest movies")
    }
    const data: TrendingsResponse = await response.json()
    return data
  } catch (error) {
    console.error(error);

  }
}