const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
const seedDB = require("./seeds");

mongoose.connect("mongodb://localhost:27017/yelpcamp", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
seedDB();

app.get("/", (req,res) => {
	res.render("landing");
});

app.get("/campgrounds", (req,res) => {
	Campground.find({}, (err, allcampgrounds) => {
		if (err) {

		} else {
			res.render("campgrounds", {campgrounds: allcampgrounds})
		}
	});
});

app.post("/campgrounds", (req,res) => {
	let name = req.body.name;
	let image = req.body.image;
	let description = req.body.description;
	let newCampground = {name: name, image: image, description: description};
	Campground.create(newCampground, (err, newlycreated) => {
		if (err) {
			console.log(err);
		} else {
			console.log(newlycreated);
			res.redirect("/campgrounds");
		}
	})
});

app.get("/campgrounds/new", (req, res) => {
	res.render("new");
});

app.get("/campgrounds/:id", (req, res) => {
	Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
		if (err) {
			console.log(err);
		} else {
			res.render("show", {campground: foundCampground});
		}
	});
});

app.listen(3000, function(){
	console.log("The YelpCamp server is running");
});