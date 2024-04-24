import React,{useState, useEffect} from 'react'
import Trivia from './pages/Trivia'
import Timer from './pages/Timer'
import Start from './pages/Start'
import data from './quizData'
import scorePyramid from './scorePyramid'

//git remote add origin https://
//git push -u origin main
function App() {
   const [questionNumber, setQuestionNumber] = useState(1)
   const[timer, setTimer] = useState(30)
   const [stop, setStop] = useState(false)
   const [score, setScore] = useState(0)
   const [quizData] = useState(data)
   const [scoreP] = useState(scorePyramid)

   
   const [username, setUsername] = useState(null)
//npm install use-sound
 
   

   useEffect(()=>{
    questionNumber>1 && setScore(scoreP.find((m)=>m.id===questionNumber-1).point)
   },[scoreP, questionNumber])
  return (
    <div className='app'>
      {
         username? <>
           <div className="main">
        
        
         {
            stop?
            <>
            

            <main style={{margin:"20px"}}>
            <h3>Your score: {score}</h3>
              <button onClick={()=>location.reload()} className='backHome'>Back home</button>
              </main>
            </>
             :<>
            <div className="top">
               <h1 style={{textAlign:"center"}}>{username}</h1>
           <h2>Score: {score}</h2>
         
           <div className="timer">
            <Timer setStop={setStop}
            stop={stop}
            data={quizData}
            questionNumber={questionNumber}
            timer={timer}
            setTimer={setTimer}
            />
           </div>
         </div>
         <div className="bottom">
          <Trivia data={quizData}
           timer={timer}
           score={score}
           setTimer={setTimer}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setStop={setStop}/>
         </div>
            </>
         }      
      </div>
      <div className="pyramid">
         <ul className="moneyList">
            {
               scoreP.map((m)=>{
                  return  <li className={questionNumber===m.id?'moneyListItem active':'moneyListItem'}
                  key={m.id}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.point}</span>
                 </li>
               })
            }
         </ul>
      </div>
</>
:
<>
         <Start setUsername={setUsername} setStop={setStop}
         />
         </>
      }
      
    </div>
  )
}

export default App