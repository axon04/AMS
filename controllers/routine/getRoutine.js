import Routine from "../../models/routine.js";
import User from "../../models/user.js";

const getRoutine = async (req, res)=> {
    try {
        const username = req.params.user;
        const foundUser = await User.findOne({username: username});
        const userId = foundUser._id;
        const foundRoutine = await Routine.findOne({_id: userId});
        if(foundRoutine) return res.send(foundRoutine);
        else return res.status(404).json({error: 'Routine not found'});
    } catch (error) {
        res.json({err: error});
    }
}

export default getRoutine;