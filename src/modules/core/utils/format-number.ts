export const formatNumber = (number: number | undefined) => {
  const formattedNumber = new Intl.NumberFormat().format(number ?? 0);
  return formattedNumber
}