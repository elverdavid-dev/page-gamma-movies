import { cn } from '@nextui-org/react'
import { ImageNotFound01Icon } from 'hugeicons-react'
import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const PlacehoderImage = ({ className, ...props }: Props) => {
	return (
		<div
			className={cn(
				'bg-gray-300 rounded-2xl flex items-center justify-center dark:bg-default/40',
				className,
			)}
			aria-label="Placehoder image"
			{...props}
		>
			<ImageNotFound01Icon
				className="text-gray-700 dark:text-gray-300"
				size={35}
			/>
		</div>
	)
}

export default PlacehoderImage
