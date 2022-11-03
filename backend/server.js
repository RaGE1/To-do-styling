const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const router = require('./routes/todoroutes');


const Todo = require('./models/TodoModel');
dotenv.config();

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
app.use(cookieParser());
app.use(express.json());


mongoose.connect(process.env.DB_URI,(err)=>{
    if(err){
        console.error(err.message);
    }
    else{
        console.log("connnected to mongodb");
    }
});

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/',router);

app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('Connected to server');
    }
})