
import User from "../model/user.js";

export const createUser = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
         res.status(400).json({ message: "Email and password are required" });
    }
    if(password.length<6){
        res.status(400).json({message:"Password must atleast length of 6"})
    }
    try {
        const existing = await User.findOne({
            where:{email}
        })
        if (existing) {
    res.status(400).json({ message: "Email already exists" });
     }
    let newuser =  await User.create({name,email,password});

     res.status(200).json({message:"User Registered Successfully"})
    } catch (error) {
          res.status(500).json({message:`Internal server error ${error}`})
    }
}