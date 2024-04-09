// Express router configuration
import Express from "express";
const router = Express.Router();

// dirname configuration (required for view engine: ejs)
import { URL } from 'url';
const __dirname = new URL('.', import.meta.url).pathname;

// user controllers
import getUser from "../controllers/user/getUser.js";
import createUser from "../controllers/user/createUser.js";
import updateUser from "../controllers/user/updateUser.js";
import deleteUser from "../controllers/user/deleteUser.js";

// routine controllers
import getRoutine from "../controllers/routine/getRoutine.js";
import createRoutine from "../controllers/routine/createRoutine.js";
import updateRoutine from "../controllers/routine/updateRoutine.js";

// record controllers
import createRecord from "../controllers/record/createRecord.js";


/*----------------------
 * Routes
 *----------------------
 */


// user route
router.route('/:user')
    .get(getUser)               // get user specified in URL
    .post(createUser)           // create new user. 
    .patch(updateUser)          // edit the fields of a user
    .delete(deleteUser);        // delete a user and the corresponding records from other collections permanently

// routine route (for each user)
router.route('/:user/routine')
    .get(getRoutine)
    .post(createRoutine)
    .patch(updateRoutine)
    .delete()

// records route
router.route('/:user/:code/:date')
    .post(createRecord)
    .patch()
    .delete()


router.get('/', async (req, res)=> {
    
    const arr = [
        {
            "test1" : "x"
        },
        {
            "test1" : "y"
        },
        {
            "test1" : "z"
        }
    ]
    res.json(arr);
})
/**
 * user stats will show up on user dashboard
 * getting and setting routine on the routine route
 * 
 * no records route
 * 
 * /:user/:date will accept different forms of json
 */

export default router;