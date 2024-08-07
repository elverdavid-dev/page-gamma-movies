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
	fallback: ['sans-serif'],
})

export const Inter = localFont({
	src: [
		{
			path: '../fonts/inter/inter-400.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/inter/inter-700.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	fallback: ['sans-serif'],
})
