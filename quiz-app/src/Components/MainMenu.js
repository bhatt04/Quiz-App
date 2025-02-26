import React, {useContext}from 'react';
import "../App.css";

import { QuizContext } from '../Helpers/Contexts';

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button 
        onClick = {() => {setGameState("quiz");    
      }}>Start the Quiz</button>  
    </div>
  )
}
