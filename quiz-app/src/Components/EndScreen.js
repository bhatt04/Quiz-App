import React, {useContext}from 'react';
import "../App.css";
import {Questions} from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';


export default function EndScreen() {

  const {score, setScore, setGameState} = useContext(QuizContext);

  const restartQuiz =() => {
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className="EndScreen">
      <h1>Quiz Ended</h1>
      <h3>{score} / {Questions.length}</h3>
      <button onClick={restartQuiz}>Try Again</button>
    </div>
  )
}
