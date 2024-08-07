'use client'

import { Image, type ImageProps } from '@nextui-org/react'
import ImageNext from 'next/image'

const ImageWrapper = ({ ...props }: ImageProps) => {
	return <Image as={ImageNext} {...props} />
}

export default ImageWrapper
