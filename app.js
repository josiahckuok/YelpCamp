const express = require("express");

const app = express();

app.get("/", (req,res) => {
 res.send("home");
});

app.listen(3000, function(){
	console.log("The YelpCamp server is running");
});