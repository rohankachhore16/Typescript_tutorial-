type InputProps = {
  value: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }
  return (
    <>
      <input type="text" value={props.value}
        onChange={props.handleInputChange} />
    </>
  )
}

export default Input
