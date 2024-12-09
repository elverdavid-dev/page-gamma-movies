import '@/app/globals.css'
import { IbmPlexSans, Inter } from '@/app/fonts/fonts'
import Provider from '@/app/providers'
import Footer from '@/components/layouts/footer/footer'
import Navbar from '@/components/layouts/header/navbar'
import { createMetadata } from '@/utils/create-metadata'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export const metadata = createMetadata({
  title: 'Discover the Best Movies and Upcoming Releases',
})

const inter = Inter
const ibmPlexSans = IbmPlexSans

export const revalidate = 3600 // revalidate at most every hour
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} ${ibmPlexSans.variable}`}>
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
