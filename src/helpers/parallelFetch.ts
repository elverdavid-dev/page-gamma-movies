type SettledResult<T> = {
	data: T | undefined
	error?: string
}

export function getSettledData<T>(
	result: PromiseSettledResult<T>,
): SettledResult<T> {
	if (result.status === 'fulfilled') {
		return { data: result.value }
	}
	return {
		data: undefined,
		error: result.reason?.message ?? 'Something went wrong',
	}
}
