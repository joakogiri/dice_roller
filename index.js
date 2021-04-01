document.querySelector("button.btn").addEventListener("click", diceRoll);

function diceRoll() {

//CREAR EL NRO RANDOM PARA 1ER DADO
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

//CREAR EL NRO RANDOM PARA 2DO DADO
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);


//CHECKEAR EL NRO Y CAMBIAR EL 1ER DADO
if (randomNumber1 == 1) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice1.png")
} else if (randomNumber1 == 2) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice2.png")
} else if (randomNumber1 == 3) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice3.png")
} else if (randomNumber1 == 4) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice4.png")
} else if (randomNumber1 == 5) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice5.png")
} else {
    document.querySelector("img.img1").setAttribute("src", "./images/dice6.png")
}

//CHECKEAR EL NRO Y CAMBIAR EL 2DO DADO
if (randomNumber2 == 1) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice1.png")
} else if (randomNumber2 == 2) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice2.png")
} else if (randomNumber2 == 3) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice3.png")
} else if (randomNumber2 == 4) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice4.png")
} else if (randomNumber2 == 5) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice5.png")
} else {
    document.querySelector("img.img2").setAttribute("src", "./images/dice6.png")
}

//DEFINIR EL GANADOR
if (randomNumber1 == randomNumber2) {

    document.querySelector("h1.title").textContent = "Empate";

} else if (randomNumber1 > randomNumber2) {

    document.querySelector("h1.title").textContent = "Player 1 WINS";

} else {
    document.querySelector("h1.title").textContent = "Player 2 WINS";
}

}
