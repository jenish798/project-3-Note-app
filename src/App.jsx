import { useState } from 'react'
import './App.css'
import {Header, Notes } from './page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Notes />
    </>
  )
}

export default App
