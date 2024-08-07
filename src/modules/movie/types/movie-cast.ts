export interface CastMember {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string | null
	credit_id: string
	department: string
	job: string
}

export interface CastResponse {
	id: number
	cast: CastMember[]
}
