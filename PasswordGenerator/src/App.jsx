
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setnumbersallowed] = useState(false)
  const [charAllowed, setcharallowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerater = useCallback(() => {
    let pass = ""

    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numbersAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }

    setPassword(pass)
  }, [length, numbersAllowed, charAllowed])

  useEffect(() => {
    passwordGenerater()
  }, [length, numbersAllowed, charAllowed])

 const copyPassword = useCallback(()=>{
  window.navigator.clipboard.writeText(Password)
 },[Password])

 
  return (
    <div className='w-full h-full flex justify-center'>

      <h1 className='absolute top-16 '>Password Generator</h1>

      <div className="w-[800px] h-[200px] border-2 border-white rounded- absolute top-44 flex px-8 py-6 justify-start"  >

        <input type="text" className='rounded-2xl w-[38rem] h-[3rem] z-10 text-black ' placeholder='Password' value={Password} />

        <button className='w-[80px] h-[3rem] border-2 border-blue-700 bg-blue-700 rounded-2xl relative right-6 px-7 active:bg-blue-600' onClick={copyPassword}>Copy</button>

        <input type="range" min={8} max={20}  className='absolute left-9 top-36' onChange={(e)=>setLength(parseInt(e.target.value))}/>
        <span className='absolute bottom-9 left-56'  >Length : {length} </span>

        <input type="checkbox" className='absolute bottom-10 left-[460px]' onChange={()=> setnumbersallowed((prev)=>!prev)} />
        <span className='absolute bottom-9 left-[380px]' >Numbers </span>

        <input type="checkbox" className='absolute bottom-10 left-[645px]' onChange={()=> setcharallowed((prev)=>!prev)} />
        <span className='absolute bottom-9 left-[550px]' >Characters </span>
      </div>

    </div>
  )
}

export default App
