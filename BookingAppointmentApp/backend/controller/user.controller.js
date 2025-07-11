import User from "../model/user.js";


export const getAllUsers  = async(req,res)=>{
    try {
         const users = await User.findAll();
         if(users.length===0){
            res.json({message:"No Users found"})
         }
         res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
        console.log(error)
    }
}
export const createUser = async(req,res)=>{
    const {name,email,phoneNumber} = req.body;
    if(!name || !email || !phoneNumber){
        res.send('All field required');
    }
    try {
        const newUser = await User.create({name,email,phoneNumber});
        res.status(200).json(newUser)
    } catch (error) {
         res.status(500).json({message:'Internal server error'});
        console.log(error)
    }
}
export const deleteUser = async(req ,res)=>{
    const deleteid = req.params.id;
    try {
        const user = await User.findByPk(deleteid)
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }
        await user.destroy()
    } catch (error) {
         res.status(500).json({message:'Internal server error unable to delete' });
        console.log(error)
    }
}
export const editUser = async(req,res)=>{
    const editId = req.params.id;
    const updateUser = req.body;

    try {
        const user = await User.findByPk(editId);
         if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }
        await user.update(updateUser);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
        console.log(error) 
    }
}