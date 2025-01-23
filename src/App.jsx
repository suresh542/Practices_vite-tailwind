import { useState } from 'react'
import './App.css'
import PageRoute from './PageRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <PageRoute/>
      </div>
    </>
  )
}

export default App
