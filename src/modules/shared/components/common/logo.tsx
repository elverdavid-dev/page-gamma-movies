import { PlaySquareIcon } from 'hugeicons-react'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href="/" className='flex items-center gap-x-1 mr-16'>
			<h3 className='text-2xl font-ibmPlexSans dark:text-white'>Gamma</h3>
		</Link>
	)
}

export default Logo
