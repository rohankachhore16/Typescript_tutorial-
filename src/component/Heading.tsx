// passing Children props in React component
type Headingprops = {
  children: string
}
export const Heading = (props: Headingprops) => {
  return (
    <h2>{props.children}</h2>
  )

}