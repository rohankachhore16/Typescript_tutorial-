type ContainerPorps = {
  styels: React.CSSProperties
}
const Container = (props: ContainerPorps) => {
  return (
    <div style={props.styels}>
      <h2>Text Content Goes here </h2>
    </div>
  )
}

export default Container
