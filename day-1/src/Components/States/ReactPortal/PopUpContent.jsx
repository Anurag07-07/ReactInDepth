import React from 'react'
import { createPortal } from 'react-dom'

const PopUpContent = ({copied}) => {
  return createPortal(
    <div>
      {
        copied && <section style={{position:"absolute",fontSize:"20px",color:"red"}}>Text has been Copied</section>
      }        
    </div>,
    document.querySelector('#pop-up')
  )
}

export default PopUpContent
