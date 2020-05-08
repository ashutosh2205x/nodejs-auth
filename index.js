const express= require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv= require("dotenv");


//routes
const authRoute= require('./routes/auth');

//congfig
dotenv.config();

//connecting to DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser : true},(DBerror)=>{
    console.log("DB Error=>", DBerror)
})


//middlware
app.use(express.json());

app.use('/api/user', authRoute)
app.listen(3000, ()=>{
    console.log('sv running...')
})