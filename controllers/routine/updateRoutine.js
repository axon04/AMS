import Routine from "../../models/routine.js";
import User from "../../models/user.js";

const updateRoutine = async (req, res)=> {
    try {
        const username = req.params.user;
        const foundUser = await User.findOne({username: username});
        const userId = foundUser._id;
        const foundRoutine = await Routine.findOne({user: userId});



        for(const field in req.body){
            // for(let i = 0; i < Object.keys(foundRoutine[field]).length; i++) console.log(foundRoutine[field][i]);
            foundRoutine[field] = req.body[field];
        }

        const updatedRoutine = await foundRoutine.save();
        return res.send(updatedRoutine);
    } catch (error) {
        console.log(error);
        res.json({error: error});
    }
}

export default updateRoutine;