'use client'

import { Button } from '@nextui-org/react'
import { UserCircleIcon } from 'hugeicons-react'

const SignInButton = () => {
	return (
		<Button
			variant="light"
			className="text-white w-full lg:w-auto text-lg py-2 lg:text-base lg:py-0 bg-[#F0B90B] lg:bg-transparent"
			startContent={<UserCircleIcon size={18} strokeWidth={1.8} />}
		>
			Sign in
		</Button>
	)
}

export default SignInButton
