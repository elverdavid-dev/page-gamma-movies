'use client'

import { UserButton } from '@clerk/nextjs'
import { Bookmark02Icon, FavouriteIcon } from 'hugeicons-react'

const UserButtonWrapper = () => {
	return (
		<UserButton>
			<UserButton.MenuItems>
				<UserButton.Link
					href="/favorite"
					label="Favorite movies"
					labelIcon={<FavouriteIcon size={13} strokeWidth={2.5} />}
				/>
				<UserButton.Link
					href="/saved"
					label="Saved movies"
					labelIcon={<Bookmark02Icon size={13} strokeWidth={2.5} />}
				/>
			</UserButton.MenuItems>
		</UserButton>
	)
}

export default UserButtonWrapper
