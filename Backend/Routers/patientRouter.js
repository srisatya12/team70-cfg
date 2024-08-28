const express = require("express");
const { unactive,activate } = require("../Controllers/PatientController");
const patientRouter=express.Router();



patientRouter
.route('/add')
.post(activate)

patientRouter
.route('/delete')
.post(unactive)


module.exports=patientRouter