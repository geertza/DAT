const express = require("express");
const app = express.Router();
const search = require("./BingSearch");
app.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});
app.get("/bing/:id/:option",async (req, res) => {
	console.log('query = ',req.params.id)
	let image = req.params.id;
	let option = req.params.option;
	// console.log(image,option)
	return res.json((await search(image,option)).data)
});
module.exports = app;