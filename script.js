"use strict";
let playerStartingNumber = 2;
let enemyStartingNumber = 1;
let playerNumber = playerStartingNumber;
let enemyNumber = enemyStartingNumber;
const fightButton = document.getElementById("fightButton");
const playerNumberElement = document.getElementById("playerNumber");
const enemyNumberElement = document.getElementById("enemyNumber");
const upgradeOption = document.getElementById("upgradeOptions");
const upgradeButtons = document.querySelectorAll(".upgradeButton");
function upgrade(number) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Upgrade button ${number} clicked with random number: ${randomNumber}`);
    // Pobierz przycisk z NodeList
    const button = upgradeButtons[number];
    // Stwórz nowy przycisk (klon) i zastąp stary przycisk nowym
    const newButton = button.cloneNode(true);
    button.replaceWith(newButton);
    if (randomNumber * 2 < 9) {
        newButton.innerHTML = `+${randomNumber}`;
        newButton.addEventListener("click", () => {
            playerNumber += randomNumber + 1;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    }
    else if (randomNumber < 10) {
        newButton.innerHTML = `-${randomNumber}`;
        newButton.addEventListener("click", () => {
            playerNumber -= randomNumber;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    }
    else if (randomNumber < 16) {
        newButton.innerHTML = `+${randomNumber + 2}`;
        newButton.addEventListener("click", () => {
            playerNumber += (randomNumber) + 3;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    }
    else if (randomNumber < 17) {
        newButton.innerHTML = `+${randomNumber - 2}`;
        newButton.addEventListener("click", () => {
            playerNumber += (randomNumber - 1);
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    }
    else if (randomNumber < 19) {
        newButton.innerHTML = `*2`;
        newButton.addEventListener("click", () => {
            playerNumber = playerNumber * 2;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    }
    else {
        newButton.innerHTML = `reset`;
        newButton.addEventListener("click", () => {
            playerNumber = 0;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    }
}
function fight() {
    if (playerNumber > enemyNumber) {
        alert("You won this fight!");
        playerNumber += enemyNumber;
        enemyNumber = playerNumber + Math.floor(Math.random() * 4);
        upgradeOption.classList.remove("hidden");
        console.log(`Upgrade options visible: ${upgradeOption.classList}`);
        for (let i = 0; i < 3; i++) {
            upgrade(i);
        }
        console.log(`Player number after fight: ${playerNumber}`);
    }
    else {
        alert("You lost this fight!");
        playerNumber = playerStartingNumber;
        enemyNumber = enemyStartingNumber;
        upgradeOption.classList.add("hidden");
        console.log(`Upgrade options hidden: ${upgradeOption.classList}`);
    }
    playerNumberElement.innerHTML = playerNumber.toString();
    enemyNumberElement.innerHTML = enemyNumber.toString();
}
fightButton.addEventListener("click", fight);
playerNumberElement.innerHTML = playerNumber.toString();
