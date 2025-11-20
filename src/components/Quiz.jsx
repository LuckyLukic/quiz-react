import { useState } from "react";
import QUESTIONS from "../question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectedAnswer(answer) {
    setUserAnswers((answerSelectedList) => {
      return [...answerSelectedList, answer];
    });
  }

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((singleAnswer) => {
          return (
            <li key={singleAnswer} className="answer">
              <button onClick={() => handleSelectedAnswer(singleAnswer)}>
                {singleAnswer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
