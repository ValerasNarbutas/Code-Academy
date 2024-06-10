import { useState } from "react";
import "./App.css";

function App() {
  // PRACTICE 1 - COLORS:

  // const [getColor, setColor] = useState("white");

  // const changeColor = (newColor) => {
  //   setColor(newColor);
  // };

  // PRACTICE 2 - LETTERS:

  // const [getLetter, setLetter] = useState("a");

  // function generateRandomLetter () {
  //   const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //   const letter = letters[Math.floor(Math.random() * letters.length)];
  //   return setLetter(letter);
  // }

  // PRACTICE 3 - IMAGES:

  // const [getPhoto, setPhoto] = useState(
  //   "https://resources.bestfriends.org/sites/default/files/styles/large/public/2019-01/introducing-dogs-cats-resource_0.jpg?itok=_pvDS_XH"
  // );

  // const changePic = (newPic) => {
  //   setPhoto(newPic);
  // };

  return (
    <>
      {/* PRACTICE 1 - COLORS: */}
      {/* <div className="rectangle" style={{ backgroundColor: getColor }}></div>
      <div className="buttons">
        <button onClick={() => changeColor("yellow")}>
          Yellow
        </button>
        <button onClick={() => changeColor("blue")}>
          Blue
        </button>
        <button onClick={() => changeColor("red")}>
          Red
        </button>
      </div> */}

      {/* PRACTICE 2 - LETTERS: */}

      {/* <div>{getLetter}</div>
        <button onClick={generateRandomLetter}>Generate Letter</button> */}

      {/* PRACTICE 3 - IMAGES: */}

      {/* <img src={getPhoto} alt="" />
      <button
        onClick={() =>
          changePic(
            "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
          )
        }
      >
        Show cat
      </button>
      <button
        onClick={() =>
          changePic(
            "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
          )
        }
      >
        Show dog
      </button> */}

    </>
  );
}

export default App;
