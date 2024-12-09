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
				color="#6ee7b7"
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
