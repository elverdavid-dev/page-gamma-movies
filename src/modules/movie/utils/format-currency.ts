export const formatCurrency = (amount: number) => {
	const formattedMoney = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount)

	return formattedMoney
}
