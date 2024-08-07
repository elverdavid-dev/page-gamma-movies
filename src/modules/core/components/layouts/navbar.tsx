'use client'
import Logo from '@/modules/core/components/common/logo'
import SignInButton from '@/modules/core/components/layouts/header/sign-in-button'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar2 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const navLinks = [
		{ name: 'Popular', path: '/' },
		{ name: 'Now Playing', path: '/' },
		{ name: 'Upcoming', path: '/' },
		{ name: 'Top Rated', path: '/' },
		{ name: 'Favorite', path: '/' },
		{ name: 'Saved', path: '/' },
	]
	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth="full"
			className="bg-black py-2"
		>
			<NavbarBrand>
				<Logo />
			</NavbarBrand>
			<NavbarContent className="hidden lg:flex" justify="start">
				{navLinks.map(({ name, path }) => (
					<NavbarItem key={path}>
						<Link
							href={path}
							className="text-gray-300 text-lg md:text-base hover:text-white transition-all"
						>
							{name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent className="hidden lg:flex" justify="end">
				<NavbarItem>
					<SignInButton />
				</NavbarItem>
			</NavbarContent>
			{/* Toggle */}
			<NavbarContent className="lg:hidden" justify="end">
				<NavbarMenuToggle
					className="text-white"
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>
			<NavbarMenu className="bg-black pt-5 flex flex-col gap-y-5 items-center">
				{navLinks.map(({ name, path }) => (
					<NavbarMenuItem key={path}>
						<Link
							href={path}
							className="text-gray-300 text-lg md:text-base hover:text-white transition-all"
						>
							{name}
						</Link>
					</NavbarMenuItem>
				))}
				<SignInButton />
			</NavbarMenu>
		</Navbar>
	)
}

export default Navbar2
