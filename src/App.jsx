import { useState } from "react"

function App() {
  const [color,Setcolor]= useState('skyblue')

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}} 
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shodow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> Setcolor("red")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-white shadow-lg"
                  style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> Setcolor("blue")}
           className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-white shadow-lg"
                  style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> Setcolor("green")}
           className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-white shadow-lg"
                  style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=> Setcolor("yellow")}
           className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-black shadow-lg"
                  style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=> Setcolor("pink")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-black shadow-lg"
                  style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=> Setcolor("black")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-white shadow-lg"
                  style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=> Setcolor("silver")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-blackshadow-lg"
                  style={{backgroundColor:"silver"}}>Sliver</button>
          <button onClick={()=> Setcolor("orange")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-20 text-black shadow-lg"
                  style={{backgroundColor:"orange"}}>Orange</button> 
          <button onClick={()=> Setcolor("grey")}
           className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-white shadow-lg"
                  style={{backgroundColor:"grey"}}>Grey</button>
          <button onClick={()=> Setcolor("purple")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-20 text-white shadow-lg"
                  style={{backgroundColor:"purple"}}>Purple</button>  
          <button onClick={()=> Setcolor("lavender")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-20 text-black shadow-lg"
                  style={{backgroundColor:"lavender"}}>Lavender</button>  
          <button onClick={()=> Setcolor("olive")}
          className="outline-none text-xl px4 py-1 rounded-3xl w-16 text-white shadow-lg"
                  style={{backgroundColor:"olive"}}>Olive</button>                                                     
        </div>
      </div>
    </div>
  )
}

export default App
