import { useState } from 'react'
import Car from './ClassComponent'
import Human from './FunctionComponent'
import User from './PropsExample'

function App() {

  return (
    <>
    <h1>Hello</h1>
    <Car />
    <Human />

    <h1>Props Example</h1>
    <User nameProp="Richard" ageProp= {23} deptProp="HR" emailProp= "richard123@gmail.com"/>
    <User nameProp="Angela" ageProp= {22} deptProp="IT" emailProp= "angela89@gmail.com"/>
    </>
  )
}

export default App
