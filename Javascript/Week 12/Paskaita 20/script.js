// syc/async
// promise
// asyc/await
// new Error

// mes mokemes sinchronini programavima. Kai kodas skaitomas nuo virsaus i apacia. 
// async gali vykti ne is karto. pvz, kaip setTimeout

setTimeout(() => {
    console.log("labas");
}, 2000);

let x = 10;

x += 10;

console.log(x);

const pr = new Promise((resolve, reject) => {
    const user = {
        name: "Vardas",
        age: 20
    }
    resolve(user)
})

console.log(pr);

// then

pr.then((data) => {
    console.log("Resolved", data);
    return "Perduota is 1 then"
})
    .then((data) => {
    console.log("then 2", data);
    return "informacija is 2 then"
})
    .then((data) => {
        console.log("then 3", data);
        return "kazkas"
    }).catch(() => {
        console.log("Catch", err);
    }).finally((x) => {
        console.log("finally", x);
    })


// async/await

const userInfoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Vardas",
            lastName: "kazkas",
        });
    }, 2000);
});

// userInfoPromise.then((data) => console.log(data))

// const userInfo = await userInfoPromise;
// console.log(userInfo);

async function displayUserInfo() {
    try {
        const usrInfo = await userInfoPromise;
        const p = document.createElement("p");
        p.textContent = `${usrInfo.name} ${usrInfo.lastName}`
        document.body.append(p)
    } catch {
        console.log("kazkoks erroras ivyko");
    }

    console.log("dar kazkas");
}

const btn = document.querySelector("button");

btn.addEventListener("click", displayUserInfo);

// const err = new Error("negalima gauti userio info");
// throw err;

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
    return data.json();
})
    .then((data) => {
    console.log(data);
})