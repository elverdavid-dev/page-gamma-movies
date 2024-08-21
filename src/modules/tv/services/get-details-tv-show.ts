import { apiKey, baseUrlTmdb } from '@/modules/shared/utils/config'
import type { TvShowDetails } from '@/modules/tv/types/tv-show'

interface Params {
  id_movie: number
}

export const getDetailsTv = async ({ id_movie }: Params) => {
  const url = `${baseUrlTmdb}/tv/${id_movie}?api_key=${apiKey}&language=en-US`

  try {
    const response = await fetch(url, { next: { revalidate: 300 } })
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data: TvShowDetails = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
