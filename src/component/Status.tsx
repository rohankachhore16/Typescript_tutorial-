// Advanced Porps Concept

type StatusProps = {
  status: "loading" | "success" | "error";
}
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading"
  } else if (props.status === "success") {
    message = "Data Fatch SuccessFully"
  } else if (props.status === "error") {
    message = "Error fetching Data"
  }
  return (
    <>
      <h2> Status {message}</h2>
    </>
  )
}

export default Status
