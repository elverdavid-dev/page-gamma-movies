export interface Movie {
	backdrop_path: string
	id: number
	title: string
	original_title: string
	overview: string
	poster_path: string
	media_type: string
	adult: boolean
	original_language: string
	genre_ids: number[] // Assuming genre_ids is an array of numbers
	popularity: number
	release_date: string
	video: boolean
	vote_average: number
	vote_count: number
}
