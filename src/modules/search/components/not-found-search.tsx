'use client'
import notfoundSeach from '@/modules/search/assets/not-found-search.webp'
import Image from 'next/image'
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
				className="mx-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] mt-10"
			/>
		</section>
	)
}

export default NotFoundSeach
