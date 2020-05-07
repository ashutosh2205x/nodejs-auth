const express= require("express");

const app= express();

const authRoute= require('./routes/auth');

//middlware
app.use('/api/user', authRoute)
app.listen(5000, ()=>{
    console.log('sv running...')
})