const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;
const ENV_PATH = path.resolve(__dirname, "./.env.domain");

inquirer
    .prompt({
        type: "input",
        name: "proxyDomain",
        message: "실행할 도메인을 입력해주세요.",
        default: "http://localhost",
    })
    .then((answer) => {
        fs.writeFileSync(ENV_PATH, `PROXY_DOMAIN=${answer.proxyDomain}`);
        const domain = answer.proxyDomain.match(/[^(http(s)?:\/\/)]([a-z0-9\w]+\.)+[a-z0-9]{2,}[^(:|/)]/gi)[0];
        exec(`HOST=${domain} react-scripts start`);
    });
