import User from "../models/user.js";

export const getAllUsers = async(req,res)=>{
    try {
         const users = await User.findAll();
         return res.json(users);
    } catch (error) {
        console.log('Error fetching in users',error)
        res.send('Internal server error')
    }
}
export const createUser = async(req,res)=>{
    const {name,email,age} = req.body;
    try {
         const newUser = await User.create({name,email,age})
        res.status(201).json(newUser);  
    } catch (error) {
         res.status(500).json({ message: "Internal Server Error" });
    }
}