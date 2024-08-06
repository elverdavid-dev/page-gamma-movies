'use client'

import { NextUIProvider } from '@nextui-org/react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const Provider = ({ children }: Props) => {
	return <NextUIProvider>{children}</NextUIProvider>
}

export default Provider
