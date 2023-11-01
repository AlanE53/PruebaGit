import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MenuSchema = new Schema({
   id: ObjectId,
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   SKU: {
      type: Number,
      required: true
   },
   combo: {
      type: Array,
      required: true
   }
});

export default mongoose.model("Menu", MenuSchema);