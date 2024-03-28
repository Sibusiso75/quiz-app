import React,{useRef} from 'react'
import "../App.css"
function Start({setUsername}) {
    const inputValue = useRef()


    function handleClick(e){
      if(inputValue.current.value){
        setUsername(inputValue.current.value)
        


      }
        
    }
  return (
    <div className='start'>
    <input type="text" className="startInput"
    placeholder='enter your name'ref={inputValue} />
    <button className="startButton"
    onClick ={handleClick}>Start</button>
    </div>
  )
}

export default Start