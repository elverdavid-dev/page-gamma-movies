export const createSkeletons = (count: number) => {
	return Array.from({ length: count }, (_, index) => ({
		id: `skeleton-${index}`,
	}))
}