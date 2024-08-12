'use client'
import { Pagination, type PaginationProps } from '@nextui-org/react'
import { useRouter } from 'next-nprogress-bar'
import { usePathname, useSearchParams } from 'next/navigation'

const PaginationWrapper = ({ ...props }: PaginationProps) => {
	const router = useRouter()
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const handlePage = (page: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', page.toString())
		router.replace(`${pathName}?${params.toString()}`)
	}
	return (
		<div className="mt-16 flex items-center justify-center">
			<Pagination
				onChange={handlePage}
				classNames={{
					cursor: 'bg-[#F0B90B]',
				}}
				{...props}
			/>
		</div>
	)
}

export default PaginationWrapper
