import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ComputerSchema = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Computer", ComputerSchema);