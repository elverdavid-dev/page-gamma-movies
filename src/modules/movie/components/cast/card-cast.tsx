import ImageWrapper from '@/modules/shared/components/common/image-wrapper'
import { baseUrlImage } from '@/modules/shared/utils/config'
import type { CastMember } from '@/modules/movie/types/movie-cast'
import { ImageNotFound01Icon } from 'hugeicons-react'

interface Props {
	cast: CastMember
}

const CardCast = ({ cast }: Props) => {
	return (
		<div key={cast.id} className="flex-shrink-0 w-[140px]">
			{!cast.profile_path ? (
				<div
					className="w-[140px] h-[175px] bg-gray-300 rounded-2xl flex items-center justify-center"
					aria-label="Profile image not found"
				>
					<ImageNotFound01Icon className="text-gray-500" size={35} />
				</div>
			) : (
				<ImageWrapper
					src={`${baseUrlImage}/${cast.profile_path}`}
					alt={`Profile ${cast.name}`}
					width={140}
					height={175}
					className="rounded-2xl object-cover w-[140px] h-[175px]"
				/>
			)}

			<h2 className="py-1 font-semibold">{cast.name}</h2>
			<span>{cast.known_for_department}</span>
		</div>
	)
}

export default CardCast
