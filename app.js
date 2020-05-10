const express = require("express");

const app = express();

app.get("/", (req,res) => {
	res.render("landing.ejs");
});

app.get("/campgrounds", (req,res) =>{
	let campgrounds = [
		{name: "Sample 1", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
		{name: "Sample 2", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
		{name: "Sample 3", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	]
	res.render("campgrounds.ejs", {campgrounds: campgrounds});
});

app.listen(3000, function(){
	console.log("The YelpCamp server is running");
});