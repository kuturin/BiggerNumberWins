let playerStartingNumber = 2;
let enemyStartingNumber = 1;
let playerNumber = playerStartingNumber;
let enemyNumber = enemyStartingNumber;

const fightButton = document.getElementById("fightButton") as HTMLButtonElement;
const playerNumberElement = document.getElementById("playerNumber") as HTMLElement;
const enemyNumberElement = document.getElementById("enemyNumber") as HTMLElement;
const upgradeOption = document.getElementById("upgradeOptions") as HTMLElement;
let upgradeButtons = document.querySelectorAll(".upgradeButton") as NodeListOf<HTMLButtonElement>;

function randomNumberGenerator() {
    return Math.floor(Math.random() * 10) + 1;
}

function upgrade(number: number) {
    let randomNumber: number = randomNumberGenerator();
    console.log(`Upgrade button ${number} clicked with random number: ${randomNumber}`);

    const button = upgradeButtons[number];

    // Klonowanie przycisku
    const newButton = button.cloneNode(true) as HTMLButtonElement;
    button.replaceWith(newButton);

    // Aktualizacja listy przycisków
    upgradeButtons = document.querySelectorAll(".upgradeButton") as NodeListOf<HTMLButtonElement>;

    if ((randomNumber * 2) < 9) {
        newButton.innerHTML = `+${randomNumber +1}`;
        newButton.addEventListener("click", () => {
            playerNumber += randomNumber + 1;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    } else if ((randomNumber * 2) < 10) {
        newButton.innerHTML = `-${randomNumber}`;
        newButton.addEventListener("click", () => {
            playerNumber -= randomNumber;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    } else if ((randomNumber * 2) < 16) {
        newButton.innerHTML = `+${randomNumber + 3}`;
        newButton.addEventListener("click", () => {
            playerNumber += (randomNumber) + 3;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    } else if ((randomNumber * 2) < 17) {
        newButton.innerHTML = `+${randomNumber - 1}`;
        newButton.addEventListener("click", () => {
            playerNumber += (randomNumber - 1);
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    } else if ((randomNumber * 2) < 19) {
        newButton.innerHTML = `*2`;
        newButton.addEventListener("click", () => {
            playerNumber = playerNumber * 2;
            playerNumberElement.innerHTML = playerNumber.toString();
            upgradeOption.classList.add("hidden");
            console.log(`Player number after upgrade: ${playerNumber}, randomNumber: ${randomNumber}`);
        });
    } else {
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
        enemyNumber = playerNumber + Math.floor(Math.random() * 10) - 2;
        upgradeOption.classList.remove("hidden");
        console.log(`Upgrade options visible: ${upgradeOption.classList}`);
        for (let i = 0; i < 3; i++) {
            upgrade(i);
        }
        console.log(`Player number after fight: ${playerNumber}`);
    } else {
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