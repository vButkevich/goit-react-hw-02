import "./feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positive}%</p>
      </div>
    </div>
  );
};

export default Feedback;
