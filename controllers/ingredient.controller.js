import Ingredient from "../models/ingredient.model.js"

const getIngredient = async (req, res) => {
   try {
      const ingredients = await Ingredient.find({}); 
    
      res.send(ingredients);
   } catch (error) {
      res.status(500).send({
         ok: false,
         message: "Server error"
      })
   }
};

const addIngredient = async (req, res) => {
   const newIngredient = new Ingredient({
      name: req.body.name,
      quantity: req.body.quantity,
      SKU: req.body.SKU,
      price: req.body.price,
      expirationDate: new Date(req.body.expirationDate),
      purchaseDate: new Date()
   })

   await newIngredient.save()
      .then(newIngredient => {
         res.status(200).send({
            ok: true,
            message: "Ingredient added successfully",
            newIngredient
         })
      })
      .catch((error) => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const updateIngredient = async (req, res) => {
   await Ingredient.updateOne({ 
         _id: req.body._id
      },
      { 
         $set: { 
            name: req.body.name,
            price: req.body.price
         } 
      })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Ingredient has been updated successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const deleteIngredient = async (req, res) => {
   await Ingredient.deleteOne({
      _id: req.body._id   
   })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Ingredient has been deleted successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

export {getIngredient, addIngredient, updateIngredient, deleteIngredient}