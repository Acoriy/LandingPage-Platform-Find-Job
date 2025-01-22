
import { useEffect } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navebar from './Components/Navebar'
import {motion} from "framer-motion"
import { useState } from 'react'

function App() {
   const [x , setX] = useState(0)
   const [y , setY] = useState(0)


   useEffect(()=>{
      const HandleChangeMouse = (e)=>{
         setX(e.clientX - 20)
         setY(e.clientY - 20)
      }
      window.addEventListener("mouseover" , HandleChangeMouse)
      // clein Up function :

      return ()=>{
         window.removeEventListener('mouseover' , HandleChangeMouse)
      }

   } , [])
  return (
    <div className='font-DmSans'>
      <motion.div 
         animate={{ x:x , y:y }}
       className='hidden relative md:block pointer-events-none z-50 w-[40px] h-[40px] border border-solid border-[#FF8345]  border-t-4 border-b-4 border-l-4 border-r-4 rounded-full'></motion.div>
       <Navebar/>
       <main>
          <div id='home'>
             <Hero/>
          </div>
       </main>
    </div>
  )
}

export default App
