import React, {useState,  useEffect } from 'react'
import useSound from "use-sound"
 import play from "../assets/quiz-game-music-loop-bpm-90-61070.mp3"
 import correct from "../assets/correct-156911.mp3"
import wrong from "../assets/fail-144746.mp3"
import ticking from "../assets/clock-timer-reverb-58822.mp3"

function Trivia({ score, data, questionNumber, setQuestionNumber, setStop, stop}) {
    const [question ,setQuestion] = useState(null)
    const [selectedAnswer ,setSelectedAnswer] = useState(null)
    const [className ,setClassName] = useState("answer")

    const [timeTicking] = useSound(ticking)
   const [wrongAnswer] = useSound(wrong)
  const [correctAnswer] = useSound(correct)
  const [letsPlay] = useSound(play)

  
  

  function handleShuffle(arr){
    return arr.sort(()=>Math.random()-0.5)
 }
   function delay(duration, callback){
   setTimeout(() => {
          callback()         
   }, duration);
   }

  
    function handleClick(answer){
        setSelectedAnswer(answer)
       setClassName("answer active")
        delay(3000, ()=>
            setClassName(answer.correct? "answer correct": "answer wrong")
        );
        delay(5000, ()=>{
            if(answer.correct){
            correctAnswer()
                 delay(1000, ()=>{
                     setQuestionNumber((previous)=>previous+1)
                     setSelectedAnswer(null)
                 })
            
            }else{
                wrongAnswer()
                delay(1000, ()=>{
                    setStop(true)
                })
              
            }
        })

    }
 
    
    useEffect(()=>{
       
         setQuestion(data[questionNumber-1]) 
        
    },[data, questionNumber])
   


  return (
    <div className='trivia'>

        <h2 className='score'>Score:{score}</h2>
        
        <div className="question" >
            {question?.question}
        </div>
        <br />
        <div className="answers">
           {
            question?.answers.map((ans)=>{
                return <div  className={selectedAnswer===ans? className:'answer'} onClick={()=>handleClick(ans)}>
                    {ans.text}
                </div>
            })
           }
           
        </div>

    </div>
  )
}

export default Trivia