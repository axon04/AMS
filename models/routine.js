import mongoose from "mongoose";
const { Schema, model } = mongoose;

/**
 * IMPROVEMENTS REQUIRED:
 * ---------------------
 * Way to validate that the structure of the object of each day of the week is like this:
 * {
 *      '0' : 'some subject',
 *      '1' : 'some other subject',
 *          .
 *          .
 *          .
 *      'n' : 'last subject'
 * }
 * where the object property will all be an increasing sequence of numbers, and not anything else.
 */

const routineSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true},
    sun: {type: Schema.Types.Mixed},
    mon: {type: Schema.Types.Mixed},
    tue: {type: Schema.Types.Mixed},
    wed: {type: Schema.Types.Mixed},
    thu: {type: Schema.Types.Mixed},
    fri: {type: Schema.Types.Mixed},
    sat: {type: Schema.Types.Mixed}
});

/**
 * NOTE: The 'user' field refers to the _id field of User schema.
 *          This might be useful when creating statistics from existing data by using mongoose populate.
 *          It also acts as a fast search field for MongoDB as _id is indexed.
 *          It prevents duplicate routines as well.
 * 
 *          The schemaType for days of the week are Mixed schemaType of mongoose, not MongoDB.
 *          It is used as the relative order of array elements is altered in MongoDB, and using objects
 *          can help with maintaining order. 
 *          (See controllers/routine/getRoutine.js for more info.)
 */

const Routine = model('Routine', routineSchema);

export default Routine;