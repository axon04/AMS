import mongoose from "mongoose";
const { Schema, model } = mongoose;

// User schema definition

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},     // unique username for each user
    email: {type: String, required: true, unique: true},        // unique email
    password: {type: String, required: true},                   
    name: {type: String, required: true}
});

// NOTE: defining username and email as 'unique' helps in throwing error when
//       duplicate values are getting inserted into DB, and thus prevents further errors.
//       The errors are handled in the controller scripts.

const User = model('User', userSchema);

export default User;