import { useContext } from "react"
import { UserContext } from "./UserContext"

const UserContextCompoennt = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: 'rohan',
        email: 'rohan@gamil.com'
      })
    }
  }

  const handleLogout = () => {
    if (userContext) {
      userContext?.setUser(null)
    }

  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>user Name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  )
}

export default UserContextCompoennt
