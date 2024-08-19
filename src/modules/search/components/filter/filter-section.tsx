'use client'

import { Button } from '@nextui-org/react'
import { FilterVerticalIcon } from 'hugeicons-react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const FilterSection = () => {
	const router = useRouter()
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const handleFilter = (filter: string) => {
		const params = new URLSearchParams(searchParams)
		params.set('type', filter)
		router.replace(`${pathName}?${params.toString()}`)
	}
	return (
		<section className="flex items-center gap-x-3">
			<Button variant="bordered">
				<FilterVerticalIcon />
				Filters
			</Button>
			<Button variant="bordered" onClick={() => handleFilter('keywords')}>
				Keywords
			</Button>
		</section>
	)
}

export default FilterSection
