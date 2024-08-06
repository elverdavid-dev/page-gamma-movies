"use client"

import { NextUIProvider } from "@nextui-org/system"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default Provider