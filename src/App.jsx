import { useState } from 'react'
import './App.css'
import Home from './home'
import StickyNavbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll"> */}
      <div className='bg-slate-400'>
        <StickyNavbar/>
        <Home/>
      </div>
      {/* </div> */}
      {/* <Home></Home> */}
    </>
  )
}

export default App
