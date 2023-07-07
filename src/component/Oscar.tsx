// pas  children props with help of another component

import { ReactNode } from "react"

type OscarProps = {
  children: ReactNode
}
const Oscar = (props: OscarProps) => {
  return (
    <>
      <h2>{props.children}</h2>
    </>
  )
}

export default Oscar
