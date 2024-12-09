'use client'
import { Input, type InputProps } from '@nextui-org/react'
import { Search01Icon } from 'hugeicons-react'
import { useRouter } from 'next-nprogress-bar'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = ({ ...props }: InputProps) => {
	//Hooks
	const router = useRouter()
	const searchParams = useSearchParams()

	const query = searchParams.get('q') ?? ''

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams)

		if (value) {
			params.set('q', value)
			params.delete('page')
		}
		router.replace(`/search?${params.toString()}`)
	}, 400)

	// Prefetch the search page
	useEffect(() => {
		router.prefetch('/search')
	}, [router])

	return (
		<Input
			role="search"
			placeholder="Type to search..."
			isClearable
			autoComplete="off"
			startContent={<Search01Icon />}
			onChange={(event) => handleSearch(event.target.value)}
			defaultValue={query}
			{...props}
		/>
	)
}

export default SearchInput
