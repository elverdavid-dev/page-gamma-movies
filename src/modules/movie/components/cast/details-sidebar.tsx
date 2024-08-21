import type { Genre } from '@/modules/home/types/genres'
import { formatCurrency } from '@/modules/movie/utils/format-currency'
import Subtitle from '@/modules/shared/components/common/subtitle'

interface Props {
	genres?: Genre[]
	budget?: number
	revenue?: number
	originalLanguage?: string
	status?: string
}

const DetailSidebar = ({
	budget,
	genres,
	originalLanguage,
	revenue,
	status,
}: Props) => {
	return (
		<section className="container mx-auto mt-16 w-96 flex flex-col gap-y-3 p-3">
			<Subtitle text="Info" />
			<div>
				<div>
					<h3>Budget</h3>
					<span>{formatCurrency(budget ?? 0)} </span>
				</div>
				<span>{formatCurrency(revenue ?? 0)} </span>
				<span>{status} </span>
				<span>{originalLanguage} </span>
			</div>
		</section>
	)
}

export default DetailSidebar
