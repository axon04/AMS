import User from "../../models/user.js";

const updateUser = async (req, res)=> {
    try {
        const username = req.params.user;
        const foundUser = await User.findOne({username: username});
        if(foundUser){
            const {name, password} = req.body;
            foundUser.name = name ? name : foundUser.name;
            foundUser.password = password ? password : foundUser.password;
            const updatedUser = await foundUser.save();
            return res.send(updatedUser);
        } else {
            return res.status(404).json({error: 'User not found'});
        }
    } catch (error) {
        res.json({error: error});
    }
}

export default updateUser;