import React, { useEffect, useState } from "react";
import Head from "./components/head";
import Score from "./components/Score";
import Card from "./components/Card";
import ImageSection from "./components/ImageSection";

const App = () => {
  const maxMoves = 5;
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(0);

  const playGame = (playerChoice) => {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    setRound(round + 1);

    // Determine the winner
    if (playerChoice === computerChoice) {
      setResult("It's a tie!  ");
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      setResult("You win!! ");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("Computer wins!  ");
      setComputerScore(computerScore + 1);
    }
  };
  //Reset
  const handleReset = () => {
    // setPlayerScore(null);
    // setComputerScore(null);
    // setPlayerChoice("")
    // setComputerChoice("")
    // setResult("");
    window.location.reload()
  };
  useEffect(() => {
    if (round > maxMoves) {
      alert('Game Over!!')
      if(computerScore === playerScore){
        alert('Its a tie!');
      }else if(computerScore > playerScore){
            alert('Computer Is Win !!')
      }else if(computerScore < playerScore){
        alert('You Win !!');
      }
      handleReset();
      window.location.reload();
    }
  }, [round]);
  return (
    <div>
      <Head />
      <Score
        playerScore={playerScore}
        computerScore={computerScore}
        result={result}
        handleReset={handleReset}
      />
      <Card playerChoice={playerChoice} computerChoice={computerChoice} />
      <ImageSection playGame={playGame} />
    </div>
  );
};

export default App;
