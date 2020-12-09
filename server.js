const express = require('express');
const app = express();
const cors =require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI ||"mongodb+srv://Rii123:Yhteys21@desert.kyn4g.mongodb.net/asiakasDB");

//require route
app.use("/", require("./routes/noteRoutes"));

//for Heroku
 if(process.env.NODE_ENV === 'production'){
    app.use(express.static('asiakaspalaute/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'asiakaspalaute', 'build', 'index.html'));
    });
} 

app.listen(PORT, function(){
    console.log("express server running");
})