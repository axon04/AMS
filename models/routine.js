import mongoose from "mongoose";
const { Schema, model } = mongoose;

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

const Routine = model('Routine', routineSchema);

export default Routine;