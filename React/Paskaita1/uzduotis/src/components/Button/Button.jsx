export default function Button() {
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

function handleClick(){
    console.log("As esu mygtuko komponentas");
}