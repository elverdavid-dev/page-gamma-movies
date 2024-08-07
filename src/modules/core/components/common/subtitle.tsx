interface Props {
	text: string
}
const Subtitle = ({ text }: Props) => {
	return <h2 className="text-2xl font-ibmPlexSans text-gray-800">{text}</h2>
}

export default Subtitle
