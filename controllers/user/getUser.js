import User from "../../models/user.js";

const getUser = async (req, res)=> {
    try {
        const username = req.params.user;

        const foundUser = await User.findOne({username : username});
        console.log(foundUser);
        if(!foundUser) return res.status(404).json({error : 'User not found'});
        return res.send(foundUser);
    } catch (error) {
        res.json({error: error});
    }
}

export default getUser;