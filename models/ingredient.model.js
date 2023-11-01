import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const IngredientSchema = new Schema({
   id: ObjectId,
   name: {
      type: String,
      required: true
   },
   quantity: {
      type: Number,
      required: true
   },
   SKU: {
      type: Number,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   expirationDate: {
      type: Date,
      required: true
   },
   purchaseDate: {
      type: Date,
      required: true
   },
});

export default mongoose.model("Ingredient", IngredientSchema);