'use client'
import { Button, type ButtonProps, cn } from '@nextui-org/react'
import { ArrowLeft01Icon } from 'hugeicons-react'
import Link from 'next/link'

interface Props extends ButtonProps {
	path: string
}

const BackButton = ({ path, className }: Props) => {
	return (
		<Button
			as={Link}
			radius="lg"
			href={path}
			isIconOnly
			variant="light"
			className={cn('z-30 text-white', className)}
		>
			<ArrowLeft01Icon size={30} strokeWidth={2.5} />
		</Button>
	)
}

export default BackButton
