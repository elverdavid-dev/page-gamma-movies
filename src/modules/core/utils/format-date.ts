export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);

  return formattedDate

}