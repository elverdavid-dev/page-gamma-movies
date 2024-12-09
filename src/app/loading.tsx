import { Spinner } from '@nextui-org/react'

const loading = () => {
	return (
		<section className="mt-20 flex items-center justify-center h-96">
			<Spinner color="default" label='Loading...' />
		</section>
	)
}

export default loading
