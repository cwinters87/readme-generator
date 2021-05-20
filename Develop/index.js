// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "test",
            message: "How do you test this project"
        },
        {
            type: "list",
            name: "license",
            message: "What liscencse are you using",
            choices: [
                "Apache 2.0",
                "Boost Software 1.0",
                "Eclipse Public 1.0",
                "MIT",
                "Mozilla 2.0",
                "None"
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(error);
        console.log("README.md created!")
    })
}

// TODO: Create a function to initialize app
function init() {  
    inquirer.prompt(questions).then(answers => {
        const readMeData = generateMarkdown(answers)
        return readMeData
        })
    .then(readMeData => writeToFile('README.md', readMeData))
    }

// Function call to initialize app
init();
