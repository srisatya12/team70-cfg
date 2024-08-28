const mongoose = require('mongoose');
mongoose.connect(db).then(function(db){
console.log("from inventory")    
}).catch(function(err){
    console.log(err);
})
const InventorySchema =mongoose.Schema({

name:{
    type:String
},
quantity:{

    type:Number

}


})
const InventoryModel=mongoose.model('InventoryModel',InventorySchema);
module.exports=InventoryModel
