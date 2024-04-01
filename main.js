#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "guess the number between 1-10",
    },
]);
if (answer.guessNumber === randomNumber) {
    console.log("congrats! you guessed the right number:)");
}
else {
    console.log("oops! You Guessed a Wrong Number .Try Again");
}
