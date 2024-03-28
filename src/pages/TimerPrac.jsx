import React, {useState, useEffect} from 'react'

function TimerPrac({setStop, questionNumber}) {
    const [timer, setTimer] = useState(30)

    useEffect(()=>{
        if(timer===0){
            setStop(true)
        }
        let interval = setInterval(() => {
            setTimer((prev)=>prev-1)
        }, 1000);
        return () => clearInterval(interval)
    }, [setStop, timer])
    useEffect(()=>{
        setTimer(30)
    }, [questionNumber])
  return (
    <div></div>
  )
}

export default TimerPrac