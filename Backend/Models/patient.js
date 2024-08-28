const mongoose = require('mongoose');
const db=require('../secrets.js').db
mongoose.connect(db).then(function(db){
    
}).catch(function(err){
    console.log(err);
})
const patientSchema =mongoose.Schema({

name:{
    type:String
},
relative:{
    type:Array
}
,
entryDate:{
    type:Date,
    default:Date.now()
},
active:{
type:Boolean,
default:true
},
QrCode:{
    type:String,
    default:''
},
RationSupplied:{
    type:Array,
    default:[]
}



})
const patientModel=mongoose.model('patientModel',patientSchema);
module.exports=patientModel
