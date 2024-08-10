import { Button } from '@nextui-org/react'
import { FilterHorizontalIcon } from 'hugeicons-react'

const FilterSection = () => {
	return (
		<section>
			<div className="flex items-center gap-x-2 mt-6">
				<Button startContent={<FilterHorizontalIcon />} variant="bordered">
					<strong>Filtros</strong>
				</Button>
				<Button variant="bordered">Keywords</Button>
				<Button variant="bordered">Rating</Button>
			</div>
		</section>
	)
}

export default FilterSection

/* 
Filtros Básicos:
Buscar por Keywords:
Implementar un campo de búsqueda que filtre las películas por palabras clave.
Buscar por Rating:
Permitir al usuario filtrar las películas por su rating.
Filtrar por Géneros:
Implementar filtros de género para categorizar las películas.
Ordenar por:
Dar la opción de ordenar las películas según los siguientes criterios: título de la A a la Z, popularidad (ascendente y descendente), rating (ascendente y descendente), fecha de estreno (ascendente y descendente).
*/
