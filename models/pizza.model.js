import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PizzaSchema = new Schema({
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
   ingredients: {
      type: Array,
      required: true
   },
   size: {
      type: String,
      required: true
   }
});

export default mongoose.model("Pizza", PizzaSchema);