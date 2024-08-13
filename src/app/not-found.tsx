import { Button } from '@nextui-org/react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Page not found',
}

const NotFound = () => {
	return (
		<main className="h-96 flex flex-col items-center justify-center">
			<strong className="font-extrabold lg:text-7xl text-6xl">Oops!</strong>
			<p className="text-2xl font-extrabold mt-2 text-gray-800 dark:text-gray-300">
				Page not found!
			</p>
			<Button as={Link} href="/" size="lg" className="mt-4">
				Back to home
			</Button>
		</main>
	)
}

export default NotFound
