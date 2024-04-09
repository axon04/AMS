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
// -- each user can have only one routine at a time (can be changed later if required)
router.route('/:user/routine')
    .get(getRoutine)            // get the routine of the user specified in URL
    .post(createRoutine)        // create a routine for the specified user. Overwrite if already exists
    .patch(updateRoutine)       // edit a particular day/days of the routine(more granular control required)
    .delete()                   // delete routine of specified user (**yet to be implemented)

// records route (single date)
router.route('/:user/:code/:date')
    .post(createRecord)         // create the attendance record for the code specified, for a single date
    .patch()                    // edit the attendance status (present, absent, no classes) (*** yet to be implemented ***)
    .delete()                   // delete the attendance record for specified code and date (*** yet to be implemented ***)  

// records route (date range) (*** yet to be implemented ***)
router.route('/:user/:code/:startDate-:endDate')
    .get()                      // gets all records for the date specified

    
export default router;