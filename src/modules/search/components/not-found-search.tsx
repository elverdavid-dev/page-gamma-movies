'use client'
import Image from 'next/image'
import notfoundSeach from '@/modules/core/assets/not-found-search.webp'
import { useSearchParams } from 'next/navigation'
const NotFoundSeach = () => {
	const searchParams = useSearchParams()
	const query = searchParams.get('q')
	return (
		<section className="mt-10">
			<h2 className="text-2xl font-ibmPlexSans">
				No results found for "{`${query ?? ''}`}"
			</h2>
			<Image
				src={notfoundSeach.src}
				alt="Not found icon"
				width={300}
				height={300}
				className="mx-auto"
			/>
		</section>
	)
}

export default NotFoundSeach
