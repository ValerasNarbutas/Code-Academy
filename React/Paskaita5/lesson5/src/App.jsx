import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // EXAMPLE 1:

  // const [data, setData] = useState(null);

  // function getJoke() {
  //   fetch("https://api.chucknorris.io/jokes/random")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     });
  // }

  // EXAMPLE 2:

  // const [data, setData] = useState(null);

  // function getUserData() {
  //   fetch("https://jsonplaceholder.typicode.com/users/3")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res);
  //     setData(res);
  //   })
  // }

  // EXAMPLE 3:
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <>
      {/* EXAMPLE 1: */}

      {/* <div>
        <div>{data && <div>{data.value}</div>}</div>
        <button onClick={getJoke}>Get Joke</button>
      </div> */}

      {/* EXAMPLE 2: */}

      {/* <div>{data && <div>{data.username}</div>}</div>
      <div>{data && <div>{data.email}</div>}</div>
      <div>{data && <div>{data.phone}</div>}</div>
      <div>{data && <div>{data.address.city}</div>}</div>
      <div>{data && <div>{data.company.catchPhrase}</div>}</div>
      <button onClick={getUserData}>Get User</button> */}

      {/* EXAMPLE 3: */}

      <div>
        {data.map((x, ) => <div>{x.username}</div>)}
      </div>
    </>
  );
}

export default App;