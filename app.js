const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors');

dotenv.config({ path: "./config.env" });

require('./db/conn');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		credentials: true
	})
);

// all routers
app.use(require('./router/auth'));

app.get("/about", (req,res) => {
    res.send("Hello to the about us page");
});

// 3. Steps heroku
if(process.env.NODE_ENV == "production"){
	app.use(express.static("client/build"))
}


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`backend is running at port no ${port}`);
});