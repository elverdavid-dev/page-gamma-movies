import type { Metadata } from 'next'

interface Props {
	title: string
	description?: string
	canonicalUrl?: string
	ogImg?: string
}

const siteUrl = 'https://technical-test-gamma.vercel.app'
const siteName = 'Inlaze Movies'
const descriptionDefault =
	'Explore trending, popular, top-rated and upcoming movies in one place. Stay up to date with the best in cinema.'

export const createMetadata = ({
	title,
	description,
	ogImg,
	canonicalUrl,
}: Props): Metadata => {
	return {
		title: `${title} | Inlaze Movies`,
		description: description ?? descriptionDefault,
		metadataBase: new URL(siteUrl),
		alternates: {
			canonical: `${siteUrl}${canonicalUrl ?? ''}`,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph: {
			title: `${title} | Inlaze Movies`,
			description: description ?? descriptionDefault,
			url: `${siteUrl}/${canonicalUrl}`,
			siteName,
			images: [
				{
					url: ogImg ?? '/og-image.png',
				},
			],
			locale: 'en',
			type: 'website',
		},
		twitter: {
			title: `${title} | Inlaze Movies`,
			description: description ?? descriptionDefault,
			images: [ogImg ?? '/og-image.png'],
		},
		keywords: ['movies', 'trailers', 'premieres'],
	}
}
