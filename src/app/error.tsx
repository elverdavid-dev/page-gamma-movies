'use client'

import { Button } from '@nextui-org/react'
import { useEffect } from 'react'

interface Props {
	error: Error & { digest?: string }
	reset: () => void
}

export default function ErrorBoundary({ error, reset }: Props) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main className="flex flex-col items-center justify-center gap-y-5 h-96">
			<h1 className="text-2xl md:text-4xl font-bold">Something went wrong! </h1>
			<Button size="lg" onClick={() => reset()}>
				Try again
			</Button>
		</main>
	)
}
