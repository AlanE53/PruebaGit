import Pizza from "../models/pizza.model.js"

const getPizzas = async (req, res) => {
   try {
      const pizzas = await Pizza.find({}); 
    
      res.send(pizzas);
   } catch (error) {
      res.status(500).send({
         ok: false,
         message: "Server error"
      })
   }
};

const addPizza = async (req, res) => {
   const newPizza = new Pizza({
      name: req.body.name,
      price: req.body.price,
      SKU: req.body.SKU,
      ingredients: req.body.ingredients,
      size: req.body.size
   })

   await newPizza.save()
      .then(newPizza => {
         res.status(200).send({
            ok: true,
            message: "Pizza added successfully",
            newPizza
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const updatePizza = async (req, res) => {
   await Pizza.updateOne({ 
         _id: req.body._id
      },
      { 
         $set: { 
            name: req.body.name,
            price: req.body.price,
            SKU: req.body.SKU,
            ingredients: req.body.ingredients,
            size: req.body.size
         } 
      })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Pizza has been updated successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const deletePizza = async (req, res) => {
   await Pizza.deleteOne({
      _id: req.body._id   
   })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Pizza has been deleted successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

export {getPizzas, addPizza, updatePizza, deletePizza}