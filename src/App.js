import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackOverview from "./components/FeedbackOverview";

function App() {
  const [feedbacks, setFeedbacks] = useState([])

  return (
    <div data-testid="parent-container">
        {/*<h2>Demo Information</h2>
        <input type="text" placeholder="Enter email"/>
        <button>Click here</button>
        <ul>
          <li>Phone</li>
          <li>Laptop</li>
        </ul>*/}
        <FeedbackForm setFeedbacks={setFeedbacks}/>
        <FeedbackOverview feedbackList = {feedbacks} />
    </div>
  );
}

export default App;
