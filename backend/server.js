const express = require('express');
app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.json("hello from server").status(200);
});

app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('Connected to server');
    }
})