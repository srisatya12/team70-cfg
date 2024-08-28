const express = require("express");
const patientModel=require('../Models/patient')

module.exports.unactive=async function unactive(req,res){
    try{
let data=req.body.id;

let patient = await patientModel.findById(data);
// console.log(patient)

patient.active=false
await patient.save();
res.json({
    message:"Patient Deactivated"
})
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}
module.exports.activate=async function activate(req,res){
try{
    let data=req.body;
    let patient=await patientModel.create(data);
    if(patient){
        res.json({
            message:"Patient entered !"
        })
    }
    else{
        res.json({
            message:"Some err!"
        })
    }


    
}
catch(err){
res.json({
    message:err.message
})
}

}