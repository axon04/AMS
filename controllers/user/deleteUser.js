import User from "../../models/user.js";

const deleteUser = async (req, res)=> {
    try {
        const username = req.params.user;
        const password = req.body.password;
        const foundUser = await User.findOne({username: username});
        if(foundUser && foundUser.password === password){
            const deletedUser = await User.deleteOne({username: username});
            return res.json({msg: 'User deleted successfully'});
        } else if(foundUser && foundUser.password !== password){
            return res.status(401).json({error: 'Password mismatch. Unauthorized.'});
        } else return res.status(404).json({error: 'User not found'});
    } catch (error) {
        res.json({error: error});
    }
}

export default deleteUser;