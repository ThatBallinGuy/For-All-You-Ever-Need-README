const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter project title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter project description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation process',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage details',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select prefered license',
        choices: [  "Apache License 2.0",
                    "The Unlicense",
                    "MIT License",
                    "GNU General Public License v3.0",
                    "Mozilla Public License 2.0"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter contributing guidelines',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter sample tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter email address',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("../README.md", data, (err) =>
        err ? console.error(err) : console.log("README successfully created!")
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile(generateMarkdown(response)));
}

// Function call to initialize app
init();