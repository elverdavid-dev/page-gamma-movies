'use client'

import { Input } from '@nextui-org/react'
import { Search01Icon } from 'hugeicons-react'

const SearchInputPlaceholder = () => {
	return (
		<Input
			role="search"
			placeholder="Type to search..."
			startContent={<Search01Icon />}
			aria-busy
			aria-disabled
			className="pointer-events-none"
		/>
	)
}

export default SearchInputPlaceholder
