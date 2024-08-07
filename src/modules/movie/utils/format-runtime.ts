export const formatRuntime = (runtime: number) => {
	const hours = Math.floor(runtime / 60)
	const minutes = runtime % 60
	if (minutes === 0) {
		return `${hours}h`
	}
	return `${hours}h ${minutes}m`
}
