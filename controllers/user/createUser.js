import User from "../../models/user.js";

const createUser = async (req, res)=> {
    try {
        const {username, password, email, name} = req.body;
        const foundUser = await User.findOne().or([{username: username}, {email: email}]);
        if(!foundUser){
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