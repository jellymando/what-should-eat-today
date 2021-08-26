const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;
const ENV_PATH = path.resolve(__dirname, "./.env.local");

inquirer
    .prompt({
        type: "input",
        name: "proxyDomain",
        message: "실행할 도메인을 입력해주세요.",
        default: "localhost",
    })
    .then((answer) => {
        const domain = answer.proxyDomain.match(/[^(http(s)?:\/\/)]([a-z0-9\w]+\.?)+[a-z0-9]{1,}[^(:|/)]/gi);
        if (!domain) return console.log("--- 올바른 형식의 도메인을 입력해주세요. ---");
        fs.writeFileSync(ENV_PATH, `HOST=${domain[0]}`);
        exec(`react-scripts start`);
        exec("node ./src/server/index.js");
    });
