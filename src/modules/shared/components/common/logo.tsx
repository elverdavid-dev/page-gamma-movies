import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href="/">
			<Image
				src="/logo.svg"
				alt="logo"
				width={150}
				height={50}
				className="mr-16 w-[150px] h-[50px]"
			/>
		</Link>
	)
}

export default Logo
