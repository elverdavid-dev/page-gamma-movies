import Link from 'next/link'

const Logo = () => {
	return (
		<Link href="/" className='flex items-center gap-x-1 lg:pr-16 pr-5'>
			<h3 className='text-2xl font-ibmPlexSans dark:text-white'>Gamma</h3>
		</Link>
	)
}

export default Logo
