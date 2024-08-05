
import Dm from "./sample"
function App() {
  const username = "deepankar"

  return (
    <div>
    {/* div or <> fragments*/}
      <Dm/>
      <h1>Welcome, {username}</h1>
      {/* </> */}
    </div>
  )
}

export default App