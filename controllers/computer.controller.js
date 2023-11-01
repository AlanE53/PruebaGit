import Computer from "../models/computer.model.js"

const getComputer = async (req, res) => {
   try {
      const computers = await Computer.find({}); 
    
      res.send(computers);
   } catch (error) {
      res.status(500).send({
         ok: false,
         message: "Server error"
      })
   }
};

const addComputer = async (req, res) => {
   const newComputer = new Computer({
      name: req.body.name,
      price: req.body.price  
   })
   
   // await newComputer.save((error, newComputer) => {
   //    res.status(200).json({
   //      ok: true,
   //      message: "Computer added successfully",
   //      newComputer
   //    })
   // });
   await newComputer.save()
      .then(newComputer => {
         res.status(200).send({
            ok: true,
            message: "Computer added successfully",
            newComputer
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const updateComputer = async (req, res) => {
   await Computer.updateOne({ 
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
            message: "Computer has been updated successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const deleteComputer = async (req, res) => {
   await Computer.deleteOne({
      _id: req.body._id   
   })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Computer has been deleted successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

export {getComputer, addComputer, updateComputer, deleteComputer}