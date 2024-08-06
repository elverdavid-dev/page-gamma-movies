import { CircularProgress, type CircularProgressProps } from '@nextui-org/progress'

interface Props extends CircularProgressProps {
  voteAverage: number
}

const VoteAverage = ({ voteAverage, ...props }: Props) => {
  const valueVoteAverage = voteAverage * 10

  const vaiantColor = valueVoteAverage < 40
    ? 'danger'
    : valueVoteAverage < 65
      ? 'warning'
      : 'success';

  return (
    <CircularProgress
      value={valueVoteAverage}
      color={vaiantColor}
      formatOptions={{ style: 'percent' }}
      showValueLabel={true}
      {...props}
    />
  )
}

export default VoteAverage