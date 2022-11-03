const Todo = require('../models/TodoModel');
const LSUser = require('../models/LSuser');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  


    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('LSUser validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }


const secret = "bunny";
const maxAge = 3*60*60*24;
const createToken = (id)=>{
    return jwt.sign({id},secret,{
        expiresIn:maxAge,
    })
}

const signup_post = async (req,res)=>{
    try{
        const {email,password} = req.body;
    const user = new LSUser();
    user.email = email;
    user.password = password;
    await user.save();
    const token = createToken(user._id);
    res.cookie('jwt',token,{
        httpOnly: true,
        maxAge:maxAge*1000,
    })
    
    res.json({
        user:user._id,
    }).status(201); 
    }catch(e){
        const errors = handleErrors(e);
    res.status(400).json({ errors });
    }

}

const login_post = async (req,res)=>{
    const { email, password } = req.body;

  try {
    const user = await LSUser.login(email, password);
    const token = createToken(user._id);
    // console.log(token);
    res.cookie('jwt',token,{
        httpOnly: false,
        maxAge:maxAge*1000,
    })
    res.status(200).json({ user: user._id, tokenString: token });
  } catch (err) {
    const errors = handleErrors(err);
  res.status(400).json({errors
  })
  }
}

const logout_get = (req,res)=>{
    // const obj = JSON.parse(JSON.stringify(req.cookies));
    // console.log("was here",obj); 
    let token ="";
    if (req.headers.authorization.startsWith("Bearer ")){
        token = req.headers.authorization.substring(11, req.headers.authorization.length);
   } else {
      res.json({message:"not authorized!"})
   }
    
    console.log(token);
    
    // res.cookie('jwt',null,{maxAge:1});
    // res.redirect('/');
    
    res.json({messsage:"logged out"});
}

const getTodos = async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.json({
            success:true,
            todos,
        })
    }catch(e){
        res.json({
            success:false,
            message:e.message,
        })
    }
};

const postTodos = async (req,res)=>{
    try{
        const todo = new Todo();
        const {name, description} = req.body;
        todo.name = name;
        todo.description = description;
        await todo.save();
        res.json({
            success: true,
            todo,
        })
    }
    catch(e){
        res.json({
            success:false,
            message:e.message,
        })
    }
}

const updateTodos = async (req,res)=>{
    try{
       const todo = await Todo.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        description: req.body.description,
       });
       res.json({
        success: true,
        todo,
    })
    }catch(e){
        res.json({
            success:false,
            message:e.message,
        })
    }
}
const updateStatus = async (req,res)=>{
    try{
        let temp = await Todo.findById(req.params.id);
        
        if(temp.status=="To-do"){
            temp.status = "In-progress";
        }
        else if(temp.status=="In-progress"){
            temp.status = "Finished"
        }
        else {
            temp.status = "To-do"
        }
        temp.save();
        res.json({
            success: true,
            temp,
    })}
    catch(e){
        res.json({
            success: false,
            message:e.message,
        })
    }
}

const deleteTodo = async (req,res)=>{
    try{
        const temp = await Todo.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            temp,
        })
    }
    catch(e){
        res.json({
            success: false,
            message:e.message,
        })
    }
}









module.exports = {
    getTodos,
    postTodos,
    updateTodos,
    updateStatus,
    deleteTodo,
    signup_post,
    login_post,
    logout_get,
}