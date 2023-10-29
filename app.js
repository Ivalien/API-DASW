const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const movieController = require("./controllers/MovieController");

const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://user:io3zJQi6xOwjbFob@cluster0.wt5joqu.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(dbURI).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);


const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app
    .route("/")
    .get(movieController.listAllMovies)
    .post(movieController.createNewMovie);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});