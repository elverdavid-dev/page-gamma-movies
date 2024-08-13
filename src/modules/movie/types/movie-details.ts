import type { Movie } from '@/modules/shared/types/movie'

// Interfaz para la colección a la que pertenece la película
interface Collection {
	id: number
	name: string
	poster_path: string | null
	backdrop_path: string | null
}

// Interfaz para un género
interface Genre {
	id: number
	name: string
}

// Interfaz para una compañía de producción
interface ProductionCompany {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

// Interfaz para un país de producción
interface ProductionCountry {
	iso_3166_1: string
	name: string
}

// Interfaz para un idioma hablado
interface SpokenLanguage {
	english_name: string
	iso_639_1: string
	name: string
}

// Interfaz principal para los detalles de una película, extendida desde Movie
export interface MovieDetail extends Movie {
	belongs_to_collection: Collection | null
	budget: number
	revenue: number
	runtime: number
	genres: Genre[]
	homepage: string | null
	imdb_id: string | null
	origin_country: string[]
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string | null
}
