import { useState, useEffect } from 'react'
import useSound from "use-sound"
// import ticking from "../assets/clock-timer-reverb-58822.mp3"
import playSound from "../assets/cute-level-up-1-189852.mp3"
// import play from "../assets/quiz-game-music-loop-bpm-90-61070.mp3"

function Timer({data,questionNumber, setStop, stop}) {
    const[timer, setTimer] = useState(30)
    // const [clockTick] = useSound(ticking)
    const [letsPlay] = useSound(playSound)


    useEffect(()=>{
      
        if(timer===0){
            setStop(true)
        } 
      
        

       
       
        const interval = setInterval(() => {
            setTimer((prev)=>prev-1)
        }, 1000);
        return ()=>clearInterval(interval)


    },[setStop, timer])
  
    


    useEffect(()=>{
   setTimer(30)
   
    },[questionNumber])

    return<>
    <h3>{timer}</h3>
    </>
}
export default Timer;