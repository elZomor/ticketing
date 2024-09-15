import React from 'react'
import th from "../../assets/images/th.jpg"
import seats from "../../assets/images/seats.jpeg"
import seats12 from "../../assets/images/seats12.avif"
export default function Home() {
  return (
    
    <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
      <img src={seats12} className="absolute top-0 left-0  w-full" alt=""/>
      <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
        <div className="col-span-6">
          {/* <span className="uppercase text-white text-xs font-bold mb-2 block">EG-Theatre</span> */}
          <h1 className="text-white font-extrabold text-5xl mb-8">EG-Theatre</h1>
          <p className="text-stone-100 text-base">
          “The play is not in the words, it’s in you!”
          </p>
          <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Sign Up</button>
          <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10 mx-3">Booking </button>
        </div>
      </div>
    </div>
   
  )
}
