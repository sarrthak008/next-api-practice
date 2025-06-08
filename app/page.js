"use client";

import { useEffect, useState } from "react";

const Home = () => {

   const [origin,setOrigin] = useState("")

   useEffect(()=>{
      if(typeof window ==  undefined){
         setOrigin(window.location.origin)
      }
   },[])

  return (
    <div className="h-screen w-screen flex z-[10] items-center justify-center text-white flex-col bg-black relative overflow-hidden text-center">
      <div className="h-[200px] w-[300px] bg-blue-400 blur-[150px] absolute top-[45%] left-[10%]"></div>
       <h3 className="text-4xl font-bold">BUILDING API WITH NEXT JS</h3>
       <a className="text-md relative z-[15] rounded-sm mt-4 bg-gray-400  text-blue-800 px-4" href={`${origin}/api/users`}>main endpoint api/users/*</a>
    </div>
  )
}

export default Home