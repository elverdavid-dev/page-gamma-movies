import { Github01Icon, Link04Icon, Linkedin01Icon } from 'hugeicons-react'

const Footer = () => {
	return (
		<footer className="mt-16 flex items-center justify-center py-3 gap-x-1">
			<span>By </span>
			<a
				href="https://www.elvportafolio.website"
				target="_blank"
				rel="noopener noreferrer"
				className="underline flex items-center gap-x-1 hover:text-emerald-500 transition-all"
			>
				Elver David <Link04Icon />
			</a>
		</footer>
	)
}

export default Footer
