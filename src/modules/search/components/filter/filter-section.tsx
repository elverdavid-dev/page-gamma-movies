'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { FilterVerticalIcon } from 'hugeicons-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { ChangeEvent } from 'react'

const FilterSection = () => {
	const router = useRouter()
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		const params = new URLSearchParams(searchParams)
		params.set('type', e.target.value)
		router.replace(`${pathName}?${params.toString()}`)
	}
	const type = searchParams.get('type') ?? 'movie'
	return (
		<>
			<section className="flex items-center gap-x-5">
				<h2 className='flex items-center gap-x-2'>
					<FilterVerticalIcon />
					Filters
				</h2>
				<Select
					variant="bordered"
					defaultSelectedKeys={[type]}
					className="w-32"
					onChange={handleFilter}
					aria-label="select type movies"
				>
					<SelectItem key="movie">Movies</SelectItem>
					<SelectItem key="tv">Tv Show</SelectItem>
				</Select>
			</section>
		</>
	)
}

export default FilterSection
