import Record from "../../models/record.js";
import User from "../../models/user.js";
import formatDate from "../../helpers/formatDate.js";


const createRecord = async (req, res)=> {
    try {
        const code = req.params.code;
        const date = formatDate(req.params.date);
        console.log(date);

        // const username = req.params.user;
        // const foundUser = await User.findOne({username: username});
        // const userId = foundUser._id;

        // const foundRecord = await Record.findOne({date: })
    } catch (error) {
        res.json({error: error});
    }
}

export default createRecord;