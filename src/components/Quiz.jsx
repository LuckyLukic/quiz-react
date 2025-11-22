import { useState, useCallback } from "react";
import QUESTIONS from "../question";
import quizCompleteImage from "../assets/quiz-complete.png";
import ProgressTimer from "./ProgressTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    answer
  ) {
    setUserAnswers((answerSelectedList) => {
      return [...answerSelectedList, answer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="quiz complete logo" />
        <h2>Quiz is completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <ProgressTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={() => handleSelectedAnswer(null)}
        ></ProgressTimer>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((singleAnswer) => {
            return (
              <li key={singleAnswer} className="answer">
                <button onClick={handleSkipAnswer}>{singleAnswer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
