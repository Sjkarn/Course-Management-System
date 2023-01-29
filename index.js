const express = require('express');
const mongoose = require('mongoose');
const route = require('./src/route');

const app = express();
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://SAURABH:Soa4GdK4yRvlVN5i@cluster0.umtgp.mongodb.net/Course-Management-System", {useNewUrlParser: true})
.then(()=>console.log("Connected to mongoose..."))
.catch((err)=>console.log(err));

app.use('/', route);

app.listen(3000, (err)=>{
    if(err) console.log(err);
    console.log("Application is running...");
});