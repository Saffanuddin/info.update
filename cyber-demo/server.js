const express = require("express");
const mongoose = require("mongoose");


const app = express();


app.use(express.json());


app.use(express.static("public"));



// Connect MongoDB (campus database)

mongoose.connect("mongodb://127.0.0.1:27017/campus")
.then(()=>{

    console.log("MongoDB Connected");

})
.catch((error)=>{

    console.log("MongoDB Error:", error);

});



// Create User Schema

const UserSchema = new mongoose.Schema({

    number: String,

    fullname: String,

    username: String,

    password: String

});



// Create Collection

const User = mongoose.model("User", UserSchema);





// Receive signup data

app.post("/save", async (req,res)=>{


    try{


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


            message:"Your credentials are correct"


        });


    }



    catch(error){


        console.log(error);


        res.json({


            message:"Database error"


        });


    }



});





app.listen(3000,()=>{


console.log(
"Server running at http://localhost:3000"
);


});