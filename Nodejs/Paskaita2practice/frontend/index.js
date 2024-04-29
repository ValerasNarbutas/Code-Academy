async function getCars() {
    const response = await fetch("http://127.0.0.1:3000");
    const cars = await response.json();

    console.log(cars);
};

getCars();