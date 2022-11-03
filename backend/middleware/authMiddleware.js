const jwt = require('jsonwebtoken');
const LSuser = require('../models/LSuser');

const requireAuth = (req,res,next)=>{
    console.log("middleware running")
    let token ="";
    if (req.headers.authorization.startsWith("Bearer ")){
        token = req.headers.authorization.substring(11, req.headers.authorization.length);
   } else {
    console.log("Log in first");
      res.json({
        message:"Log In or Sign Up First from middleware",
        redirect:true,
        auth:false,
    })
    return;
   } 
    // if(req.cookies==undefined){
    //     res.json({
    //         messsage:"Log In or Sign Up First",
    //     })
    //     return;
    // }
    console.log(token);
    if(token){
        const secret = "bunny";
         jwt.verify(token,secret,(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/Signup');
            }
        else{
            console.log(decodedToken);
            console.log("hello");
            next();
        }
         });
    }
    else{
        res.redirect('/Signup');
    }
}

module.exports = {requireAuth};