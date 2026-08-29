const express = require('express');
const authRoute = express.Router();
const authService = require('../services/authService');


authRoute.post('/register' , async (req , res) => {
    try{
        const {user_name , email , password} = req.body;

        if(!user_name){
            return res.status(400).json({
                error : "User_name Is Required."
            })
        }else if(!email){
            return res.status(400).json({
                error : "Email is required."
            })
        }else if(!password){
            return res.status(400).json({
                error : "Password is required."
            })
        }

        const newUser = await authService.registerUser(
            user_name,
            email,
            password
        )

        res.status(201).send(`${email} Has Been Succesfully Registered.`);
    }catch(error){
        if(error.message.includes('UNIQUE constraint failed')){
            return res.status(400).json({
                error : "Username or email already exists"
            });
        }
        res.status(500).json({error : error.message});
    }
    
})

authRoute.post('/login' , async (req, res) =>{
    try{
        const {user_name , password} = req.body;

        if(!user_name){
            return res.status(400).json({error : "Please Enter the User_name."});
        }
        else if(!password){    
            return res.status(400).json({ error: "Please enter your password." });
        }

        const userLogin = await authService.verifyUser(user_name , password);
        res.status(200).json(userLogin);
    }catch(error){
        if(error.message.includes('Invalid credentials') || error.message.includes('User not found')){
            return res.status(401).send({error : "Invalid username or password"})
        }
        res.status(500).json({
            error:error.message
        });
    }
})

module.exports = authRoute;

// with {authRoute} returns object
// which is gonna cause typeError