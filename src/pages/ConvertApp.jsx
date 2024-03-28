import React, {useState, useEffect} from 'react'
import Axios from "axios"
// import "../App.css"

function ConvertApp() {
   const [amount, setAmount] = useState("")
   const [from, setFrom] = useState("usd")
   const [to, setTo] = useState("zar")
   const [info, setInfo] = useState([])
   const [options, setOptions] = useState([])
   const [output, setOutput] = useState(null)

   useEffect(()=>{
      Axios.get(`https://cdn.delivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
      .then((res)=>{
     setInfo(res.data[from])
      }).catch((err)=>{
   console.log(err)
      })

   }, [from])

useEffect(()=>{
   setOptions(Object.keys(info))
   handleConvert()
},[info])

function handleConvert(){
   const rate = info[to]
   setOutput(amount*rate)
}

  return (
    <div className='app'>
      <div className="heading">

      <h3>Currency converter</h3>
      </div>
      <div className="container">
         <div className="left">
      <h4>Amount</h4>
      <input type="text" onChange={(e)=>setAmount(e.target.value)}
      placeholder='amount...' />
         </div>
         <div className="middle">
      <h4>From</h4>
      <select onChange={(e)=>setFrom(e.target.value)} value={from}>
         {
            options.map(o=>(
               <option value={o}>
                  {o}
               </option>
            ))
         }
        </select>
         </div>
         <div className="right">
      <h4>To</h4>
        <select onChange={(e)=>setTo(e.target.value)} value={to}>
         {
            options.map(o=>(
               <option value={o}>
                  {o}
               </option>
            ))
         }
        </select>
         </div>
         <div className="result">
      <h4>Converted amount</h4>
      <h4>{amount + " " + from + "=" + output + " " + to}</h4>
      <button onClick={handleConvert}>convert</button>

        
         </div>
         
      </div>
    </div>
  )
}
export default ConvertApp