import mongoose from "mongoose";
const { Schema, model } = mongoose;

const recordSchema = new Schema({
    date: {type: Date, required: true, default: Date.now},
    code: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    present: {type: String, enum: ['true', 'false', 'na'], required: true} 
});

const Record = model('Record', recordSchema);

export default Record;