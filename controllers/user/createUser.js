import User from "../../models/user.js";

const createUser = async (req, res)=> {
    try {
        // get the required fields from req.body using destructuring syntax
        const {username, password, email, name} = req.body;
        // find the specified user in Users collection
        const foundUser = await User.findOne().or([{username: username}, {email: email}]);
        // If user is not found, create new user
        if(!foundUser){
            // Create a new user document
            const newUser = new User({
                username: username,
                password: password,
                email: email,
                name: name
            });
            const savedUser = await newUser.save();
            return res.status(201).send(savedUser);
        } else return res.json({error: 'Username or email already exists'});
    } catch (error) {
        res.json({error: error});
    }
}

export default createUser;