'use client'

import { Image, type ImageProps } from '@nextui-org/react'

const ImageWrapper = ({ ...props }: ImageProps) => {
	return <Image {...props} loading="lazy" />
}

export default ImageWrapper
