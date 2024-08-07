'use client'

import Link from 'next/link'
import SignInButton from './sign-in-button'
import Logo from '@/modules/core/components/common/logo'
const Navbar = () => {
	const navLinks = [
		{ name: 'Popular', path: '/popular' },
		{ name: 'Now Playing', path: '/now-playing' },
		{ name: 'Upcoming', path: '/upcoming' },
		{ name: 'Top Rated', path: '/top-rated' },
		{ name: 'Favorite', path: '/favorite' },
		{ name: 'Saved', path: '/saved' },
	]
	return (
		<header className="w-full py-5 bg-black sticky top-0 z-50">
			<nav className="flex items-center justify-between px-2 md:px-0  md:container md:mx-auto">
				<Logo />
				{/* navLinks */}
				<div className="space-x-5 flex-1 hidden lg:flex">
					{navLinks.map(({ name, path }) => (
						<Link
							href={path}
							key={path}
							className="text-gray-300 hover:text-white transition-all"
						>
							{name}
						</Link>
					))}
				</div>
				{/*  Logout*/}
				<div className="text-white">
					{/* <Logout01Icon size={20}/> */}
					<SignInButton />
				</div>
			</nav>
		</header>
	)
}

export default Navbar
