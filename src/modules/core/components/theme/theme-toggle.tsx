'use client'

import { Button } from '@nextui-org/react'
import { Moon02Icon, Sun01Icon } from 'hugeicons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, systemTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<div>
			{currentTheme === 'dark' ? (
				<Button
					isIconOnly
					variant="light"
					onClick={() => setTheme('light')}
					className="data-[hover=true]:bg-default/5"
				>
					<Sun01Icon />
				</Button>
			) : (
				<Button
					isIconOnly
					variant="light"
					onClick={() => setTheme('dark')}
					className="text-foreground-50 data-[hover=true]:bg-default/5"
				>
					<Moon02Icon />
				</Button>
			)}
		</div>
	)
}

export default ThemeToggle
