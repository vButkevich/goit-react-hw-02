import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/description/description";
import Notification from "./components/notification/notification";
import Feedback from "./components/feedback/feedback";
import Options from "./components/options/options";

const App = () => {
  const initfeedback = { good: 0, neutral: 0, bad: 0 };
  const localfeedback =
    JSON.parse(localStorage.getItem("feedback")) || initfeedback;

  const [feedback, setFeedback] = useState(localfeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    switch (type) {
      case "reset": {
        setFeedback(initfeedback);
        localStorage.removeItem("feedback");
        break;
      }
      default: {
        // setFeedback((state) => ({ ...state, [type]: state[type] + 1 }));
        const newFeedback = { ...feedback, [type]: feedback[type] + 1 };
        setFeedback(newFeedback);
        break;
      }
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </div>
  );
};
export default App;
