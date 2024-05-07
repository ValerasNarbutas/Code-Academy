async function getCarBrands() {
    const response = await fetch ("http://127.0.0.1:3000");
    const carBrands = await response.json();
    return carBrands;
}

async function sendCarBrands(e) {
    const carBrands = await getCarBrands();
    const carBrandsList = document.getElementById('carBrands');
    carBrandsList.innerHTML = '';
    carBrands.forEach(brand => {
        const listItem = document.createElement('li');
        listItem.textContent = brand;
        carBrandsList.appendChild(listItem);
    })
}

sendCarBrands();