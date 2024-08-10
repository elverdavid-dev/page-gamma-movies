'use client'
import { Input } from '@nextui-org/react'
import { Search01Icon } from 'hugeicons-react'
import { usePathname } from 'next/navigation'

const SearchInput = () => {
	const pathName = usePathname()
	return (
		<Input
			role="search"
			placeholder="Type to search..."
			startContent={<Search01Icon />}
		/>
	)
}

export default SearchInput
