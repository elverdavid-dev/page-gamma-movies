import type { Metadata } from 'next'
import './globals.css'
import { IbmPlexSans, Inter } from '@/fonts/fonts'
import Navbar from '@/modules/core/components/layouts/header/navbar'
import Provider from './providers'
import Footer from '@/modules/core/components/layouts/footer/footer'

const inter = Inter
const ibmPlexSans = IbmPlexSans
export const metadata: Metadata = {
	title: 'Inlaze Movies',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${ibmPlexSans.variable}`}>
				<Provider>
					<Navbar />
					{children}
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
