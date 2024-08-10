'use client'
import Logo from '@/modules/core/components/common/logo'
import SignInButton from '@/modules/core/components/layouts/header/sign-in-button'
import {
	cn,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from '@/modules/core/components/theme/theme-toggle'

const Navbar2 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathName = usePathname()
	const navLinks = [
		{ name: 'Popular', path: '/popular' },
		{ name: 'Now Playing', path: '/now-playing' },
		{ name: 'Upcoming', path: '/upcoming' },
		{ name: 'Top Rated', path: '/top-rated' },
		{ name: 'Favorite', path: '/favorite' },
		{ name: 'Saved', path: '/saved' },
	]
	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth="full"
			className="bg-black"
		>
			<NavbarContent justify="center">
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			{/* Desktop navbar items */}
			<NavbarContent className="hidden lg:flex" justify="start">
				{navLinks.map(({ name, path }) => (
					<NavbarItem key={`menuItem-${name}`} isActive={pathName === path}>
						<Link
							href={path}
							className={cn(
								'text-gray-300 text-lg md:text-base hover:text-white transition-all',
								pathName === path && 'text-[#F0B90B] hover:text-[#F0B90B]',
							)}
						>
							{name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent
				as="div"
				className="items-center flex pl-16 lg:pl-0"
				justify="end"
			>
				<NavbarItem>
					<ThemeToggle />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">
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

			{/* Mobile navbar items */}
			<NavbarMenu className="bg-black pt-5 flex flex-col gap-y-5 items-center z-50">
				{navLinks.map(({ name, path }) => (
					<NavbarMenuItem key={`menuItem-${name}`}>
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
