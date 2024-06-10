import { useState } from "react";
import "./App.css";

function App() {
  // Clicking cookie
  const [points, setPoints] = useState(0);
  const [getTwoPointsClick, setTwoPointsClick] = useState(false);
  const [getThreePointsClick, setThreePointsClick] = useState(false);

  function increasePoints() {
    let bonusPoints = 0;

    if (getTwoPointsClick) {
      bonusPoints = 1;
    }

    if (getThreePointsClick) {
      bonusPoints = 2;
    }

    setPoints(prevPoints => prevPoints + 1 + bonusPoints);
  }
  // 2 points per click button

  function twoPointsClick() {
    if (points >= 50) {
      setPoints(prevPoints => prevPoints - 50);
      setTwoPointsClick(true);
      setThreePointsClick(false);
    }
  }
  // 3 points per click button

  function threePointsClick() {
    if (points >= 100) {
      setPoints(prevPoints => prevPoints - 100);
      setTwoPointsClick(false);
      setThreePointsClick(true);
    }
  }

  // Change cookie img button
  const [getImage, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7--zk_rlgNDuqMgEF06UFU4eHtJ_GiErzIw&s"
  );

  function changeCookieImg() {
    if (points >= 50) {
      setImage(
        "https://img.freepik.com/premium-photo/cartoon-cookie-with-happy-face-eyes-generative-ai_927978-6946.jpg"
      );
      setPoints(points - 50);
    }
  }

  // Change bg color button
  const [getBgColor, setBgColor] = useState("white");

  function changeBgColor() {
    if (points >= 50) {
      setBgColor("pink");
      setPoints(points - 50);
    }
  }

  return (
    <>
      <div className="app">
        <div className="rectangle" style={{ backgroundColor: getBgColor }}>
          <img src={getImage} alt="" onClick={increasePoints} />
          <div className="counter">Points: {points}</div>
        </div>

        <div className="buttons">
          <button onClick={twoPointsClick}>
            <p>2 points per click</p>
            <p>Price: $50</p>
          </button>
          <button onClick={threePointsClick}>
            <p>3 points per click</p>
            <p>Price: $100</p>
          </button>
          <button onClick={changeCookieImg}>
            <p>Change cookie img</p>
            <p>Price: $50</p>
          </button>
          <button onClick={changeBgColor}>
            <p>Change bg color</p>
            <p>Price: $50</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
