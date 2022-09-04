import React from 'react'

const FeedbackOverview = (props) => {
  console.log(props.feedbackList)
  if(props.feedbackList.length === 0){
    return <h3>No Feedback Available</h3>
  }
  return (
    <div>
      <h2>Feedback Overview</h2>
      <ul>
         {
          props.feedbackList.map((feedback)=>{
            return <li key={feedback.id}>{feedback.feedbackText}</li>
          })
         }
      </ul>
    </div>
  )
}

export default FeedbackOverview