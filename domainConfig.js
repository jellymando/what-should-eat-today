const inquirer = require("inquirer");
const exec = require("child_process").exec;

inquirer
    .prompt({
        type: "input",
        name: "domain",
        message: "실행할 도메인을 입력해주세요.",
        default: "localhost",
    })
    .then((answer) => {
        try {
            exec(`HOST=${answer.domain} react-scripts start`);
        } catch (e) {
            console.log(e);
        }
    });
