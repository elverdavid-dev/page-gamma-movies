'use client'

import { Button, Tooltip } from '@nextui-org/react'
import { ArrowLeft01Icon } from 'hugeicons-react'
import Link from 'next/link'

interface Props {
	label?: string
	path: string
}

const BackButton = ({ path, label }: Props) => {
	return (
		<div className="flex items-center gap-x-4 py-5">
			<Tooltip
				content="Back"
				placement="bottom"
				color="foreground"
				showArrow
			>
				<Button href={path} as={Link} isIconOnly radius="lg" variant="flat">
					<ArrowLeft01Icon className="text-gray-700 dark:text-gray-300" />
					<span className="sr-only">Back</span>
				</Button>
			</Tooltip>
			<h2 className="font-bold text-2xl text-gray-800 dark:text-gray-300">
				{label}
			</h2>
		</div>
	)
}

export default BackButton
