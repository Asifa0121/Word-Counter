#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentences to count the word: "
    }
]);
const word = answers.Sentence.trim().split(" ");
console.log(word);
console.log(`Your Sentences word count is ${word.length}`);
