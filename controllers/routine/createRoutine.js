import Routine from "../../models/routine.js";
import User from "../../models/user.js";

const createRoutine = async (req, res)=> {
    try {
        const username = req.params.user;
        const foundUser = await User.findOne({username: username});
        const userId = foundUser._id;
        await Routine.deleteOne({user: userId});
        const {sun, mon, tue, wed, thu, fri, sat} = req.body;
        const newRoutine = new Routine({
            user: userId,
            sun: sun,
            mon: mon,
            tue: tue,
            wed: wed,
            thu: thu,
            fri: fri,
            sat: sat
        });
        
        const savedRoutine = await newRoutine.save();
        return res.status(201).send(savedRoutine);
    } catch (error) {
        res.json({error: error});
    }
}

export default createRoutine;