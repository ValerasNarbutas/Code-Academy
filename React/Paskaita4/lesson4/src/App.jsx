import { useState } from 'react'

import './App.css'

function App() {

  // EXAMPLE 1:

  // const [num, setNum] = useState(4);
  // let some
  // if (num == 2) {
  //   some = <h1>IT IS SOME STUFF</h1>
  // } else {
  //   some = <h1>SOME OTHER STUFF</h1>
  // }

  // EXAMPLE 2:

  // const [emoji, setEmoji] = useState("");
  // const changeEmoji = (mood) => {
  //   if (mood === "happy") {
  //     setEmoji("😁")
  //   } else if (mood === "sad"){
  //     setEmoji("🥲")
  //   }
  // }

  // EXAMPLE 3:

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  const choices = ["✌️", "✋", "✊"];

  const playGame = (playerSelection) => {
    setPlayerChoice(playerSelection);
    const randomIndex = Math.floor(Math.random() * 3);
    const computerSelection = choices[randomIndex];
    setComputerChoice(computerSelection);

    if (playerSelection === computerSelection) {
      // tie, no points
    } else if (
      (playerSelection === "✌️" && computerSelection === "✋") ||
      (playerSelection === "✋" && computerSelection === "✊") ||
      (playerSelection === "✊" && computerSelection === "✌️")
    ) {
      setPlayerPoints(playerPoints + 1);
    } else {
      setComputerPoints(computerPoints + 1);
    }
  }

  return (
    <>
     <div>
      {/* EXAMPLE 1 */}

      {/* {some}
      {num > 3 && <h1>YES MORE THAN 3</h1>}
      {num == 4 ? <h2>YES IT IS 4</h2> : <h2>NO IT IS NOT 4</h2>} */}

      {/* EXAMPLE 2 */}

      {/* <div>{emoji}</div> */}
      {/* OR, so set the state to either true or false */}
      {/* <h1>{happy ? "😁" : "🥲"}</h1> */}
      {/* <button onClick={() => changeEmoji("happy")}>Happy</button>
      <button onClick={() => changeEmoji("sad")}>Sad</button> */}

      {/* EXAMPLE 3 */}

      <h3>Computer points: {computerPoints}</h3>
      <h3>Player points: {playerPoints}</h3>

      <h2>Computer Symbol: {computerChoice}</h2>
      <h2>Player Symbol: {playerChoice}</h2>
      <h1>PLAY:</h1>

      <button onClick={() => playGame("✌️")}>✌️</button>
      <button onClick={() => playGame("✋")}>✋</button>
      <button onClick={() => playGame("✊")}>✊</button>


     </div>
    </>
  )
}

export default App
