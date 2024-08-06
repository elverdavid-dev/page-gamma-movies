interface Props {
  text: string
}
const Subtitle = ({ text }: Props) => {
  return (
    <h2 className="text-2xl font-ibmPlexSans pb-5 text-gray-800">
      {text}
    </h2>
  )
}

export default Subtitle