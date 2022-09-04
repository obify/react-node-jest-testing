import React, { useState } from 'react'

const FeedbackForm = ({setFeedbacks}) => {

  const[feedbackText, setFeedbackText] = useState("")
  const[tncBox, setTncBox] = useState(false)

  const submitFeedback = ()=>{
    console.log("Feedback submitted!")
    setFeedbacks((prev)=>[...prev,{id: Date.now(), feedbackText: feedbackText}])
    setFeedbackText("")
  }

  const saveFeedback = async ()=>{
      const response = await fetch('http://localhost:5000/save-feedback',{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({feedbackText: feedbackText})
      })

      const newSavedFeedback = await response.json()
      setFeedbacks((prev)=>[...prev, newSavedFeedback])
      setFeedbackText("")
  }
  return (
    <div>
      <h1>Feedback Form</h1>
      <input type='text' placeholder='Enter Your Feedback here' value={feedbackText}
       onChange={(eve)=>setFeedbackText(eve.target.value)}  />

       <input id='tncBox' type='checkbox' defaultChecked={tncBox}
       onChange={()=>setTncBox(!tncBox)}  />
      <label htmlFor='tncBox'>I accept the Terms and Conditions</label>

      <button onClick={saveFeedback} disabled={!tncBox || !feedbackText}>Add Feedback</button>
    </div>
  )
}

export default FeedbackForm