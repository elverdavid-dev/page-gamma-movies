'use client'

import { Button } from '@nextui-org/button'
import { UserCircleIcon } from 'hugeicons-react'

const SignInButton = () => {
	return (
		<Button
			variant="light"
			color="default"
			className='text-white'
			startContent={<UserCircleIcon size={18} strokeWidth={1.8} />}
		>
			Ingresar
		</Button>
	)
}

export default SignInButton
