import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ComputerSchema = new Schema({
  id: ObjectId,
  name: String,
  price: Number
});

export default mongoose.model("Computer", ComputerSchema);