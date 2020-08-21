const inquirer = require("inquirer");
const fs = require("fs");

//establish function to run through inquirer prompts
function fireQuestions() {
    return inquirer.prompt(questions);
}

const questions = [

    {
        type: "input",
        message: "What is the title of your project?",
        name: "proName"
    }, 
        
    
    {
        type: "input",
        message: "Give a discription of your project.",
        name: "desc"
    },    
    
    {
        type: "input",
        message: "Give a table of contents for your project.",
        name: "table"
    },
      
    {
        type: "input",
        message: "How would the user install your project?",
        name: "install"
    },

    {
        type: "input",
        message: "What is the Usage",
        name: "licenses"
    },
    
    {
        type: "input",
        message: "Is there a License?",
        name: "gitName"
    },

    {
        type: "input",
        message: "who is Contributing to your project?",
        name: "contr"
    },

    {
        type: "input",
        message: "What tests are used in your project?",
        name: "Test"
    },

    {
        type: "input",
        message: "What is your E-mail?",
        name: "email"
    },
    
    
    
    

    
    
   


]
function init() {

    fireQuestions()
        .then(function (questions) {

            fs.writeFile("README.md", `
            ## ** ${ questions.proName} README ** \n
            ## ** Username **\n
                ${ questions.gitName}  \n
            ## ** Email **\n
                ${ questions.email} \n
            # App Description \n
                ${ questions.desc} \n
            ## Table of Contents \n
                ${ questions.table} \n
            ### Installation \n
                ${ questions.install} \n
            ## Contributors \n
                ${ questions.contr} \n
            ## Testing \n
                ${ questions.Test} \n
                `,

                function (err) {

                    if (err) {
                        return console.log(err);
                    }


                });

            let badge = "[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()";
            fs.appendFile("README.md", '\n' + badge, function (err) {
                if (err) {
                    return console.log(err);
                }
                else {
                    console.log("Success! You did it!");
                }
            });



        });



}

init();


