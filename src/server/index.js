const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("views", __dirname + "/");
var router = require("../router")(app);

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const Mongoose = require("mongoose");
Mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_ACCOUNT}@cluster0.hcsaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
)
    .then(() => console.log("mongoDB Connected..."))
    .catch((e) => console.log(e));

app.use("/", express.static(__dirname + "/"));

app.listen("3001", () => console.log("listen"));
