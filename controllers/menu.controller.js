import Menu from "../models/menu.model.js"

const getMenus = async (req, res) => {
   try {
      const menus = await Menu.find({});
    
      res.send(menus);
   } catch (error) {
      res.status(500).send({
         ok: false,
         message: "Server error"
      })
   }
};

const addMenu = async (req, res) => {
   const newMenu = new Menu({
      name: req.body.name,
      price: req.body.price,
      SKU: req.body.SKU,
      combo: req.body.combo
   })
   
   await newMenu.save()
      .then(newMenu => {
         res.status(200).send({
            ok: true,
            message: "Menu added successfully",
            newMenu
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const updateMenu = async (req, res) => {
   await Menu.updateOne({ 
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
            message: "Menu has been updated successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const deleteMenu = async (req, res) => {
   await Menu.deleteOne({
      _id: req.body._id   
   })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Menu has been deleted successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

export {getMenus, addMenu, updateMenu, deleteMenu}