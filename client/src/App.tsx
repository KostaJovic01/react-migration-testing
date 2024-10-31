import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='APP' className='w-screen h-screen bg-black flex flex-col'>
          <header className='flex flex-row w-screen h-max bg-amber-300 space-x-2 pl-2'>
            <div className='bg-orange-300' > LOGO </div>
            <div className='bg-orange-300' > Nav Item 2 </div>
            <div className='bg-orange-300' > Nav Item 3 </div>
            <div className='bg-orange-300' > Nav Item 4 </div>
            <div className='bg-orange-300' > Nav Item 5 </div>
          </header>
          <div className='flex flex-row h-full'>
              <div id='sidebar' className='flex flex-col w-1/12 space-y-2 pt-2 bg-green-300 h-full'>
                  <div className='bg-orange-300'> LOGO</div>
                  <div className='bg-orange-300'> Sidebar Item 2</div>
                  <div className='bg-orange-300'> Sidebar Item 3</div>
                  <div className='bg-orange-300'> Sidebar Item 4</div>
                  <div className='bg-orange-300'> Sidebar Item 5</div>
              </div>
              <body id='page content' className='bg-white h-full w-full'></body>
          </div>
      </div>
    </>
  )
}

export default App
