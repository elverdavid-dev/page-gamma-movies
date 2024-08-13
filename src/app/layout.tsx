import './globals.css'
import { IbmPlexSans, Inter } from '@/fonts/fonts'
import Navbar from '@/modules/shared/components/layouts/header/navbar'
import Provider from './providers'
import Footer from '@/modules/shared/components/layouts/footer/footer'
import { createMetadata } from '@/modules/shared/utils/create-metadata'

export const metadata = createMetadata({
	title: 'Discover the Best Movies and Upcoming Releases',
})

const inter = Inter
const ibmPlexSans = IbmPlexSans

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
