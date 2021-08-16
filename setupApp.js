const exec = require("child_process").exec;
const dotenv = require("dotenv");
dotenv.config({ path: ".env.domain" });

exec(`HOST=${process.env.PROXY_DOMAIN} react-scripts start`);
