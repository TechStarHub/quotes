const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;

var allowCrossDomain = function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
};
app.use(allowCrossDomain);
app.get("/", (req, res) => {
	res.send({ message: "Hello World!" });
});

app.get("/rand", (req, res) => {
	const randomQuote = getRandomQuote();
	res.json({ quote: randomQuote });
});

function getRandomQuote() {
	const filePath = path.join(__dirname, "data", "quotes.json");

	const jsonData = fs.readFileSync(filePath, "utf8");

	const quotes = JSON.parse(jsonData);

	const randomIndex = Math.floor(Math.random() * quotes.length);

	return quotes[randomIndex];
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
