// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require(' ./utils/generateMarkdown')

console.log('Generator is running')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the name of your project?'
    },
     {
        type: "input",
        name: "about",
        message: "What will it be about?"
    },
    {
        type: "input",
        name: "what",
        message: "What problem does it slove?"
    },
    {
        type: "input",
        name: "Why",
        message: "Why did you make this project?"
    },
    {
        type: "input",
        name: "how",
        message: "How can this be installed?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md') , generateMarkdown(data),
    error =>{
        if (error) {
            console.log('input all the required data')
        }
    }
}

// TODO: Create a function to initialize app

// Had a friend help me out on this part
function init() {
    inquirer.createPromptModule(questions).then((answers) => {
        const filename = 'README.md';
        const data = JSON.stringify(answers, null, 2);
    })
}

// Function call to initialize app
init();