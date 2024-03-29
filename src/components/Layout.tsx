import type { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col items-center my-20 mx-4">{children}</div>
}
