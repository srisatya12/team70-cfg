const express = require("express");
const inventoryModel=require('../Models/Inventory')
module.exports.update=async function update(req,res){
    try{

        let id=req.body.id
        let val=req.body.value
        let inv=inventoryModel.findById(id);
        inv.quantity= inv.quantity+ val
        await inv.save();
        res.json({
            message:"Data updated successfully !"
            
        })
        




    }
    catch(err){
res.json({
    message:err.message
})
    }
}