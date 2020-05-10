const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

let campgrounds = [
	{name: "Sample 1", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 2", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 3", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 1", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 2", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 3", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 1", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 2", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 3", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 1", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 2", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"},
	{name: "Sample 3", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78dc924ac2_340.jpg"}
]

app.get("/", (req,res) => {
	res.render("landing");
});

app.get("/campgrounds", (req,res) => {
	res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", (req,res) => {
	let name = req.body.name;
	let image = req.body.image;
	let newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
	res.render("new");
});

app.listen(3000, function(){
	console.log("The YelpCamp server is running");
});