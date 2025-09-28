import React, { useState } from 'react'
import PopUpContent from './PopUpContent'

const Portal = () => {
  const [inputValue,setInputValue] = useState('')
  const [copied,setCopied] = useState(false)

  function handleCopy(){
    navigator.clipboard.writeText(inputValue).then(()=>{
      setCopied(true);
      setTimeout(()=>setCopied(false),5000)
    })
  }


  return (
    <div>
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
      <button onClick={handleCopy}>Copy</button>
      <PopUpContent copied={copied}></PopUpContent>
    </div>
  )
}

export default Portal
