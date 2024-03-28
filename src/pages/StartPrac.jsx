import React, {useRef} from 'react'
import "../App.css"

function StartPrac(setUsername) {
    const inputValue = useRef()

    function handleClick(e){
        e.preventDefault()
        inputValue.current.value && setUsername( inputValue.current.value)
    }
  return (
    <div>
   <input type="text" ref={inputValue}
   placeholder='enter username...'
   className='startInput' />
   <button onClick={handleClick}
   className='startButton'>
    Start
   </button>
    </div>
  )
}

export default StartPrac