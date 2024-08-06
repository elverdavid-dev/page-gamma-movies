import localFont from 'next/font/local'

export const IbmPlexSans = localFont({
	src: [
		{
			path: '../fonts/ibm-plex-sans/ibm-plex-sans-700.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--ibmPlexSans',
	preload: true,
})
