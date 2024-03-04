import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ReactDOM } from 'react'
import './App.css'
import Card from './componets/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1 className="md-7">Rishabh kushwah </h1>
 <Card username = "asus laptop" btnText= "sumit"/>
 <Card username = "acer laptop" btnText="click me"/>
    </>
  )
}

export default App
