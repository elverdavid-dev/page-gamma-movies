import type { Keyword } from '@/modules/search/types/keyword'

interface Props {
	keywords: Keyword[]
}
const KeywordSection = ({ keywords }: Props) => {
	return (
		<section>
			{keywords.map(({ id, name }) => (
				<span key={id}> {name}</span>
			))}
		</section>
	)
}

export default KeywordSection
