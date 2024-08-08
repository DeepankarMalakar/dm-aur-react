import { useState } from 'react'
import Car from './ClassComponent'
import Human from './FunctionComponent'
import User from './PropsExample'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
    <Car />
    <Human />
    <User name="Richard" />
    </>
  )
}

export default App
