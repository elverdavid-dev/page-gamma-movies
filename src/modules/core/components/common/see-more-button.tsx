import { ArrowRight01Icon } from "hugeicons-react"
import Link from "next/link"

interface Props {
  path: string
}

const SeeMoreButton = ({ path }: Props) => {
  return (
    <Link href={path} className="text-emerald-500 underline flex items-center gap-x-1 group">
      Ver más
      <ArrowRight01Icon size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-all" />
    </Link>)
}

export default SeeMoreButton