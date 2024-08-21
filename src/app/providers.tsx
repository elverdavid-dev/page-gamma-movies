'use client'

import { NextUIProvider } from '@nextui-org/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const Provider = ({ children }: Props) => {
	return (
		<>
			<ProgressBar
				color="#F0B90B"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<NextUIProvider>
				<NextThemesProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</NextThemesProvider>
			</NextUIProvider>
		</>
	)
}

export default Provider
